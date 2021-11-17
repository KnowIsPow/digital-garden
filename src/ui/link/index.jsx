import NextLink from 'next/link';

export default function Link({
  href,
  as,
  prefetch,
  shallow = false,
  replace = false,
  scroll = true,
  openNewTab,
  children,
  ...rest
}) {
  return (
    <NextLink
      href={href}
      as={as}
      prefetch={prefetch}
      shallow={shallow}
      replace={replace}
      scroll={scroll}
    >
      <a target={openNewTab && '_blank'} {...rest}>
        {children}
      </a>
    </NextLink>
  );
}
