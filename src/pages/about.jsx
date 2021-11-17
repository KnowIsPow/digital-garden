import Page from 'features/page';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function AboutPage({}) {
  return (
    <Page
      title="About Curtis Fisher"
      description="Curtis Fisher is pretty cool!"
      canonical="/about"
    >
      <Container>
        <TitleWithDescription
          title="About Curtis"
          description="My values, principles, and story..."
        />
      </Container>
    </Page>
  );
}
