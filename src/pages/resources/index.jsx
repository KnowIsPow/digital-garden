import { books } from 'data/books';
import Page from 'features/page';
import { BulletedList } from 'ui/content/bulleted-list';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function ResourcesPage({}) {
  return (
    <Page
      title="Resources"
      description="A collection of meaningful resources accumulated over my years. These have helped me immensely in growing to become who I am today."
      canonical="/resources"
    >
      <Container>
        <TitleWithDescription
          title="Resources"
          description="A collection of meaningful resources accumulated over my years. These have helped me immensely in growing to become who I am today, and this list will continue to grow as I discover more."
          wide
        />
        <div className="mt-6">
          <TitleWithDescription
            title="Books"
            description="A carefully curated (and priority ordered) selection of my top book recommendations. It's a short list for now, but soon I'll categorize these by learning goals and rank each book within its category."
            tag="h2"
          />
          <BulletedList
            items={books
              .sort((a, b) => b.score - a.score)
              .map((book) => `${book.title} – ⭐ ${book.score}`)}
          />
        </div>
      </Container>
    </Page>
  );
}
