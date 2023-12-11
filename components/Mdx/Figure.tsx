import Image from 'next/image';

interface VideoProps {
  src: string;
  caption?: string;
}

interface ImageProps extends VideoProps {
  alt: string;
}

export const NextImage = ({ src, alt, caption }: ImageProps) => {
  return (
    <figure>
      <Image src={`/images/blog${src}`} alt={alt} width={735} height={490} />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  );
};

export const YoutubeVideo = ({ src, caption }: VideoProps) => {
  return (
    <figure>
      <iframe
        className="aspect-video w-full"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  );
};
