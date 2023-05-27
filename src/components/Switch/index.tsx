import React from 'react';

export interface SwitchProps {
  on: boolean;
  onChange: (value: boolean) => void;
}

function Switch({ on, onChange }: SwitchProps) {
  return (
    <input
      className={`${on ? 'accent-red-500' : ''}`}
      type='checkbox'
      checked={on}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
}

export default Switch;
