import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

import { title, description, openGraph } from '@/app/shared-metadata';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: title,
    template: `%s | ${title}`,
    absolute: `${title} - Welcome to my blog!`,
  },
  description,
  openGraph: {
    ...openGraph,
    title,
    description,
    url: '/',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: `${title} - Feed`,
          url: '/rss',
        },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={clsx('text-gray-900', inter.className)}>
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
