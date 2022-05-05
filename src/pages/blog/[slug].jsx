import { getPosts, getSinglePost } from 'data/posts';
import Page from 'features/page';
import { ImageHeader } from 'ui/header/image-header';
import { Container } from 'ui/layout/container';
import SocialSharingIcons from 'features/social-sharing';
import Link from 'ui/link';
import { BlogGrid } from 'features/blog/grid';

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
  const otherPosts = (await getPosts()).filter((otherPost) => otherPost.slug !== post.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, otherPosts },
  };
}

export default function PostPage({ post, otherPosts }) {
  const metaTitle = post.meta_title || post.title;
  const metaDescription =
    post.meta_description || post.excerpt.slice(0, 150).replace(/(\n)/gm, ' ') + '...';

  return (
    <Page
      title={metaTitle}
      description={metaDescription}
      canonical={'/blog/' + post.slug}
      previewImage={post.feature_image}
    >
      <ImageHeader
        imageUrl={post.feature_image}
        imageAlt={post.title}
        overlayBg="bg-gradient-to-b from-transparent to-black opacity-80"
      >
        <div className="relative py-24 text-center sm:py-32 content">
          <h1 className="text-white">{post.title}</h1>
          <div className="flex justify-center mt-2 space-x-1 text-lg text-gray-200">
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
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="space-y-6">
            <article
              className="max-w-4xl pb-6 prose border-b prose-h2:text-primary"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="space-y-4">
              <h2>Further Reading</h2>
              <BlogGrid posts={otherPosts.slice(0, 3)} />
            </div>
          </div>
          <div className="flex-shrink-0 md:w-1/4 md:block">
            <div className="sticky space-y-4 top-5">
              <SocialSharingIcons
                imageUrl={post.feature_image}
                url={`${process.env.NEXT_PUBLIC_HOST}/blog/${post.slug}`}
                title={`Read ${post.title} from Curtis Fisher in ${post.reading_time}`}
                summary={metaDescription}
              />
              <p className="font-light">
                Interested in contacting Curtis Fisher?{' '}
                <Link href="/contact" className="underline hover:text-primary">
                  Start a conversation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Page>
  );
}
