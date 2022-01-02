import NextImage from 'next/image';

function isRequired() {
  throw new Error('Image src and alt props are both required!');
}

export default function Image({
  src = isRequired(),
  alt = isRequired(),
  layout = 'fill',
  ...rest
}) {
  return <NextImage src={src} alt={alt} layout={layout} {...rest} />;
}
