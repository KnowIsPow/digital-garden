function isRequired() {
  throw new Error('Image src and alt props are both required!');
}

export default function Image({ src = isRequired(), alt = isRequired(), ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
}
