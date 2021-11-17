import Page from 'features/page';

export default function IndexPage() {
  return (
    <Page
      title="Curtis Fisher - Digital Garden"
      description="An opinionated starter kit for Next.js and TailwindCSS"
      canonical="/"
    >
      <main className="space-y-10 py-12 md:py-24 bg-gray-50">
        <div className="section pb-8 border-b">
          <h1 className="font-mono text-xl md:text-2xl lg:text-3xl">Hiya, I'm Curtis!</h1>
          <p className="body text-lg mt-2 max-w-lg">
            Finding excitement, learning tech, and sharing the resources and lessons I've discovered
            along the way.
          </p>
        </div>
      </main>
    </Page>
  );
}
