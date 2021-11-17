import { BlogGrid } from 'features/blog/grid';
import Page from 'features/page';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

const articles = [
  {
    title: 'My Experiences with Next.js',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Learning to love discipline',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Figuring out how to communicate right',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'On dating...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Creating a website from scratch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Starting a youtube channel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function BlogPage({}) {
  return (
    <Page
      title="Curtis Fisher Blog"
      description="Articles written or shared by Curtis."
      canonical="/blog"
    >
      <Container>
        <TitleWithDescription
          title="Blog"
          description="A selection of writings and resources that I've accumulated along my journey."
        />
        <div className="mt-6">
          <BlogGrid articles={articles} />
        </div>
      </Container>
    </Page>
  );
}
