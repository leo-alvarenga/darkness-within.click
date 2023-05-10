import { useMemo } from "react";

export interface LangButtonProps {
  value: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

function LangButton({ value, selected, onClick }: LangButtonProps) {
  const label = useMemo(
    () => value.toLocaleLowerCase().replace(/[-]/gm, " "),
    [value]
  );

  const className = useMemo(() => {
    let base = "px-2 py-1 hover:-translate-y-1 hover:scale-110 transition-all ";

    if (selected)
      return base.concat(
        "text-background bg-red-500 hover:bg-red-500 active:green3"
      );

    return base.concat(
      "text-background bg-foreground hover:bg-red-500 active:bg-red-500"
    );
  }, [selected]);

  return (
    <button key={value} className={className} onClick={() => onClick(value)}>
      {label}
    </button>
  );
}

export default LangButton;
