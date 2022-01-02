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
        <section className="grid gap-3 py-6 md:gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Values',
              href: '/about/#values',
              description: 'The principles that guide my decision making',
            },
            {
              title: 'Goals',
              href: '/about/#goals',
              description: "What I'm constantly working towards",
            },
            {
              title: 'Experiences',
              href: '/credentials',
              description: "The skills and wisdom I've aquired through work",
            },
            {
              title: 'Blog',
              href: '/blog',
              description: 'A special place for my thoughts and opinions',
            },
            {
              title: 'Books',
              href: '/resources',
              description: "The books I've read and rated for your enjoyment",
            },
            {
              title: 'Contact',
              href: '/contact',
              description: "Share a story, an idea, or something you're proud of :)",
            },
          ].map(({ title, href, description }) => {
            return (
              <Link href={href} className="p-3 duration-300 border hover:border-primary">
                <div className="font-semibold text-primary">{title}</div>
                <p>{description}</p>
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
