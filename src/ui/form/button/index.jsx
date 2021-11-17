export default function Button({ className = 'btn-primary', children, ...rest }) {
  return (
    <button className={'btn ' + className} {...rest}>
      {children}
    </button>
  );
}
