import { getPosts, getSinglePost } from 'data/posts';
import Page from 'features/page';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default function PostPage({ post }) {
  return (
    <Page
      title={post.meta_title}
      description={post.meta_description}
      canonical={'/blog/' + post.slug}
      previewImage={post.feature_image}
    >
      <Container>
        <TitleWithDescription title={post.title} description={post.custom_excerpt} center />
        <article
          className="prose prose-blue mx-auto py-12"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </Page>
  );
}
