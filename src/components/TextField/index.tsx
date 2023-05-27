import { ChangeEvent, RefObject } from 'react';

export interface TextFieldProps {
  id?: string;
  className?: string;
  ref?: RefObject<HTMLInputElement>;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  keys?: string[];
  onKeyCapture?: () => void;
}

function TextField({ id, className, ref, keys, value, onChange, onKeyCapture }: TextFieldProps) {
  return (
    <input
      id={id}
      ref={ref}
      className={`
        bg-background rounded-lg 
        active:border-none p-1
        focus:border-none ${className}
      `}
      type='text'
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        if (!onKeyCapture) return;
        const k = keys || ['enter'];

        if (k.includes(e.key.toLowerCase())) onKeyCapture();
      }}
    />
  );
}

export default TextField;
