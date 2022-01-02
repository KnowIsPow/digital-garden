import { books } from 'data/books';
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
        <div>
          <TitleWithDescription
            title="Hiya, I'm Curtis!"
            description="Welcome to my digital garden 🌱 It's all about growing excitement, learning tech, and sharing the resources and lessons I've discovered along the way."
          />
        </div>
        <section className="grid gap-6 py-6 lg:grid-cols-3">
          {[
            { title: 'Values', href: '/about/#values' },
            { title: 'Goals', href: '/about/#goals' },
            { title: 'Experiences', href: '/credentials' },
            { title: 'Blog', href: '/blog' },
            { title: 'Books', href: '/resources' },
            { title: 'Contact', href: '/contact' },
          ].map(({ title, href }) => {
            return (
              <Link href={href} className="p-3 duration-300 border hover:border-primary">
                <div className="font-semibold text-primary">{title}</div>
                <p>This is just a test of a description</p>
              </Link>
            );
          })}
        </section>
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
