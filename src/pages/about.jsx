import { personalGoals } from 'data/personal-goals';
import { values } from 'data/values';
import Page from 'features/page';
import { BulletedList } from 'ui/content/bulleted-list';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function AboutPage({}) {
  return (
    <Page
      title="About Curtis Fisher"
      description="Storyteller, treasure hunter, and full-time marketer on the side. I love to learn, search for new ways to challenge myself, and work to become a greater person. This website serves as an ongoing personal and public resource and is an experiment in radical transparency."
      canonical="/about"
    >
      <Container>
        <div className="space-y-8">
          <TitleWithDescription
            title="About Curtis"
            description="Storyteller, treasure hunter, and full-time marketer on the side. I love to learn, search for new ways to challenge myself, and work to become a greater person. This website serves as an ongoing personal and public resource and is an experiment in radical transparency. On here you will find what I've been able to do successfully, but also the failures I've had the opportunity to learn from."
            wide
          />
          <div className="space-y-2">
            <TitleWithDescription
              title="Values"
              description="These are fundamental to who I am and serve to guide my decison making."
              tag="h2"
            />
            <BulletedList items={values} />
          </div>
          <div className="space-y-2">
            <TitleWithDescription
              title="Top 5 Goals"
              description="It's important to keep a focus on what purpose you're working towards. These are currently my top priorities."
              tag="h2"
              anchor="goals"
            />
            <BulletedList items={personalGoals} />
          </div>
        </div>
      </Container>
    </Page>
  );
}
