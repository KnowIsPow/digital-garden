import { articles } from 'data/blog';
import { BlogGrid } from 'features/blog/grid';
import Page from 'features/page';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function BlogPage({}) {
  return (
    <Page
      title="Curtis Fisher Blog"
      description="A selection of writings and resources that I've accumulated along my journey. This will be periodically updated with new ideas, thoughts, and useful resources."
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
