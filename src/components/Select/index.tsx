interface SelectOptionProps {
  value: string;
  label: string;
}

export interface SelectProps {
  name: string;
  data: string[] | SelectOptionProps[];
  value: string;
  onChange: (value: string) => void;
}

function Select({ data, name, value, onChange }: SelectProps) {
  return (
    <select className="rounded-lg bg-background p-2 text-foreground" name={name} value={value} onChange={(e) => onChange(e.target.value)}>
      {data.map((d) => {
        let label = '';
        let value = '';

        if (typeof d === 'string') {
          label = d;
          value = d;
        } else {
          label = d.label;
          value = d.value;
        }

        return <option key={`select-option-${value}`}>{label || value}</option>;
      })}
    </select>
  );
}

export default Select;
