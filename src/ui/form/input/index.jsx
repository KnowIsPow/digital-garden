import { isRequired } from 'functions/error-handling/required-props';

export default function TextInput({
  type = 'text',
  value,
  onChange = isRequired('TextInput', 'onChange'),
  className = 'input',
  leftIcon,
  rightIcon,
  ...rest
}) {
  return (
    <div className="relative rounded-sm shadow-sm">
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {leftIcon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value, e)}
        className={`${leftIcon && 'pl-10'} ${rightIcon && 'pr-10'} ${className}`}
        {...rest}
      />
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {rightIcon}
        </div>
      )}
    </div>
  );
}
