import { useMemo } from 'react';

export interface LangButtonProps {
  value: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

function LangButton({ value, selected, onClick }: LangButtonProps) {
  const label = useMemo(() => value.toLocaleLowerCase().replace(/[-]/gm, ' '), [value]);

  const className = useMemo(() => {
    const base = 'px-2 py-1 transition-all ';

    if (selected)
      return base.concat('text-background bg-red-500 hover:bg-red-500 active:bg-red-500');

    return base.concat('text-background bg-foreground hover:bg-red-300 active:bg-red-300');
  }, [selected]);

  return (
    <button key={value} className={className} onClick={() => onClick(value)}>
      {label}
    </button>
  );
}

export default LangButton;
