import { isRequired } from 'functions/error-handling/required-props';
import Image from 'ui/image';

export function ImageHeader({
  imageUrl = isRequired('ImageHeader', 'imageUrl'),
  imageAlt = isRequired('ImageHeader', 'imageAlt'),
  overlayBg,
  children,
}) {
  return (
    <header className="relative bg-black">
      <div className="absolute inset-0">
        <Image src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
        {overlayBg && <div className={`absolute inset-0 ${overlayBg}`} aria-hidden="true" />}
      </div>
      {children}
    </header>
  );
}
