import Page from 'features/page';
import Button from 'ui/form/button';
import Link from 'ui/link';

export default function NotFoundPage() {
  return (
    <Page title="404 Page" noindex>
      <main className="section py-4 md:py-12 lg:py-24">
        <h1 className="display text-xl md:text-2xl lg:text-3xl">Page Not Found</h1>
        <p className="body mt-2">This page does not exist.</p>
        <Link href="/">
          <Button className="btn-primary mt-4">Go To Home Page</Button>
        </Link>
      </main>
    </Page>
  );
}
