import NumberInput from 'ui/form/input/number-input';

export default function PhoneNumberInput({
  type = 'tel',
  autoComplete = 'tel',
  value = '',
  ...rest
}) {
  return (
    <NumberInput
      type={type}
      autoComplete={autoComplete}
      value={formatToPhone(value)}
      maxLength="10"
      {...rest}
    />
  );
}

function formatToPhone(phoneNumber) {
  return phoneNumber.toString().replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3') || '';
}
