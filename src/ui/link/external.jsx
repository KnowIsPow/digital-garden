export default function LinkExternal({
  children,
  href,
  openNewTab = false,
  rel = 'nofollow',
  ...rest
}) {
  return (
    <a href={href} target={openNewTab ? '_blank' : '_self'} rel={rel} {...rest}>
      {children}
    </a>
  );
}
