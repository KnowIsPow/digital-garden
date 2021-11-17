import Page from 'features/page';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function CredentialsPage({}) {
  return (
    <Page
      title="Curtis Fisher's Credentials"
      description="What gives Curtis credibility?"
      canonical="/credentials"
    >
      <Container>
        <TitleWithDescription title="Credentials" description="Basically my resume..." />
      </Container>
    </Page>
  );
}
