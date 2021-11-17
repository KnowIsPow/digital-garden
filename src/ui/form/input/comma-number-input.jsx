import { isRequired } from 'functions/error-handling/required-props';
import { addNumberCommas } from 'functions/utils/add-number-commas';
import NumberInput from 'ui/form/input/number-input';

export default function CommaNumberInput({
  value = isRequired('CommaNumberInput', 'value'),
  ...rest
}) {
  return <NumberInput value={addNumberCommas(value)} {...rest} />;
}
