import RSS, { FeedOptions } from 'rss';
import { allPosts } from 'contentlayer/generated';
import { title, description } from '@/app/shared-metadata';

const host =
  process.env.NODE_ENV === 'production' ? 'https://example.com' : 'http://localhost:3000';

export async function GET() {
  const feedOptions: FeedOptions = {
    title,
    description,
    site_url: host,
    feed_url: `${host}/rss`,
    image_url: `${host}/favicon-32x32.png`,
    pubDate: new Date(),
  };

  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${host}/${post.slug}`,
      date: post.date,
      categories: [post.category],
      author: 'My Name',
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
