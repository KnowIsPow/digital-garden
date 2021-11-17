import Page from 'features/page';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function ResourcesPage({}) {
  return (
    <Page
      title="Curtis's Resources"
      description="A list of resources that curtis has found useful."
      canonical="/resources"
    >
      <Container>
        <TitleWithDescription title="Resources" description="A list of resources..." />
      </Container>
    </Page>
  );
}
