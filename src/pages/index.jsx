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
            description="Finding excitement, learning tech, and sharing the resources and lessons I've discovered along the way."
          />
        </div>
      </Container>
    </Page>
  );
}
