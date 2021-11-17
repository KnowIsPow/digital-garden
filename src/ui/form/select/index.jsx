import { isRequired } from 'functions/error-handling/required-props';

export default function Select({
  className,
  options = isRequired('Select', 'options'),
  selectedOption = isRequired('Select', 'selectedOption'),
  onChange = () => {},
  renderOption = (option) => option,
  renderKey = (option) => option,
  ...rest
}) {
  return (
    <select
      className={className}
      value={selectedOption}
      onChange={({ target: { value } }) => onChange(value)}
      {...rest}
    >
      {options.map((option) => (
        <option key={renderKey(option)}>{renderOption(option)}</option>
      ))}
    </select>
  );
}
