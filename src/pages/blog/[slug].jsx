import { getPosts, getSinglePost } from 'data/posts';
import Page from 'features/page';
import { ImageHeader } from 'ui/header/image-header';
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
      <ImageHeader
        imageUrl={post.feature_image}
        imageAlt={post.title}
        overlayBg="bg-gradient-to-b from-transparent to-black opacity-80"
      >
        <div className="relative py-24 sm:py-32 content text-center">
          <h1 className="text-white">{post.title}</h1>
          <div className="mt-2 flex space-x-1 text-lg text-gray-200 justify-center">
            <time dateTime={post.published_at}>
              {Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }).format(new Date(post.published_at))}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.reading_time} minute read</span>
          </div>
        </div>
      </ImageHeader>
      <Container>
        <article
          className="prose prose-blue mx-auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </Page>
  );
}
