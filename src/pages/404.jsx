import Page from 'features/page';
import Button from 'ui/form/button';
import Link from 'ui/link';

export default function NotFoundPage() {
  return (
    <Page title="404 Page" noindex>
      <main className="content py-4 md:py-12 lg:py-24">
        <h1>Page Not Found</h1>
        <p>This page does not exist.</p>
        <Link href="/">
          <Button className="btn-primary mt-4">Go To Home Page</Button>
        </Link>
      </main>
    </Page>
  );
}
