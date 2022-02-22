import styles from './SelectInput.module.css';

interface SelectOption {
  text: string;
  value: string;
}

interface Props {
  defaultOption: SelectOption;
  options: SelectOption[];
  handler: Function;
}

export const SelectInput = ({
  defaultOption,
  options,
  handler
}: Props): JSX.Element => {
  return (
    <div>
      <select
        className={styles.SelectInput}
        onChange={e => {
          handler(e.target.value);
        }}
      >
        <option value={defaultOption.value}>{defaultOption.text}</option>
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.text}
          </option>
        ))}
      </select>
    </div>
  );
};
