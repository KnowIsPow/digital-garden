import { articles } from 'data/blog';
import { books } from 'data/books';
import { BlogGrid } from 'features/blog/grid';
import Page from 'features/page';
import { BulletedList } from 'ui/content/bulleted-list';
import Button from 'ui/form/button';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';
import Link from 'ui/link';

export default function IndexPage() {
  return (
    <Page
      title="My Digital Garden"
      description="Welcome to my digital garden. It's all about growing excitement, learning tech, and sharing the resources and lessons I've discovered along the way"
      canonical="/"
    >
      <Container>
        <div className="pb-8 border-b">
          <TitleWithDescription
            title="Hiya, I'm Curtis!"
            description="Welcome to my digital garden 🌱 It's all about growing excitement, learning tech, and sharing the resources and lessons I've discovered along the way."
          />
          <div className="mt-6">
            <p>Quick Links</p>
            <div className="flex gap-x-2 mt-2">
              <Link href="/about/#values">
                <Button>Values</Button>
              </Link>
              <Link href="/about/#goals">
                <Button>Goals</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <TitleWithDescription
            title="Book Recommendations"
            description="A selection of the best five books I've read."
            tag="h2"
          />
          <BulletedList
            items={books
              .sort((a, b) => b.score - a.score)
              .map((book) => `${book.title} – ⭐ ${book.score}`)
              .slice(0, 5)}
          />
          <Link href="/resources">
            <Button className="btn-secondary">View more books</Button>
          </Link>
        </div>
      </Container>
    </Page>
  );
}
