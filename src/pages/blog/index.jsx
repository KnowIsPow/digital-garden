import { getPosts } from 'data/posts';
import { BlogGrid } from 'features/blog/grid';
import Page from 'features/page';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export async function getStaticProps() {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default function BlogPage({ posts }) {
  return (
    <Page
      title="Blog"
      description="A selection of writings and resources that I've accumulated along my journey. This will be periodically updated with new ideas, thoughts, and useful resources."
      canonical="/blog"
    >
      <Container>
        <TitleWithDescription
          title="Blog"
          description="A selection of writings and resources that I've accumulated along my journey."
        />
        <div className="mt-6">
          <BlogGrid posts={posts} />
        </div>
      </Container>
    </Page>
  );
}
