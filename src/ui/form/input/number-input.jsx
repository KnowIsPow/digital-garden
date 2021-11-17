import { isRequired } from 'functions/error-handling/required-props';
import TextInput from 'ui/form/input';

export default function NumberInput({ onChange = isRequired('NumberInput', 'onChange'), ...rest }) {
  return (
    <TextInput
      onChange={(val, e) => onChange(numberOrEmpty(val.replace(/[^\d]/g, '')), e)}
      {...rest}
    />
  );
}

function numberOrEmpty(number) {
  return number ? Number(number) : '';
}
