import { articles } from 'data/blog';
import { BlogGrid } from 'features/blog/grid';
import Page from 'features/page';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function IndexPage() {
  return (
    <Page
      title="Curtis Fisher - Digital Garden"
      description="An opinionated starter kit for Next.js and TailwindCSS"
      canonical="/"
    >
      <Container>
        <div className="pb-8 border-b">
          <TitleWithDescription
            title="Hiya, I'm Curtis!"
            description="Welcome to my digial garden 🌱 It's all about growing excitement, learning tech, and sharing the resources and lessons I've discovered along the way."
          />
        </div>
        <div className="mt-6">
          <BlogGrid articles={articles.slice(0, 3)} />
        </div>
      </Container>
    </Page>
  );
}
