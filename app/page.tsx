import { allPosts } from 'contentlayer/generated';
import PostList from '@/components/Blog/PostList';

const Home = () => {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="container-xl">
      <section className="pt-10">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default Home;
