import Link from 'next/link';
import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import LinkPreview from './LinkPreview';

const CustomLink = (props: any) => {
  if (props.href.startsWith('/')) {
    return <Link href={props.href}>{props.children}</Link>;
  }

  if (props.href.startsWith('http')) {
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  }

  return <a {...props} />;
};

const NextImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => {
  return (
    <figure>
      <Image src={`/images/blog/${src}`} alt={alt} width={735} height={490} />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  );
};

const components: MDXComponents = {
  a: CustomLink,
  Image: NextImage,
  Link: LinkPreview,
};

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export default Mdx;
