import Image from "next/image";

export function ImageGrid({ images }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 pb-6 lg:-mx-36 xl:-mx-48">
      {images.map(({ src, alt }) => (
        <Image
          src={src}
          key={src}
          height={500}
          width={500}
          alt={alt}
          className="my-0 aspect-square w-full h-full rounded-lg object-cover"
        />
      ))}
    </div>
  );
}
