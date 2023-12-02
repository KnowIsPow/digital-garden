import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { books } from "@/data/books";

export const metadata = {
  title: "Subscribe",
  description:
    "A priority ordered list of the books I've read to date. Note that these scores are based on what current Curtis thinks of the books.",
  openGraph: {
    title: "Book Recommendations - Curtis Fisher",
    description:
      "A priority ordered list of the books I've read to date. Note that these scores are based on what current Curtis thinks of the books.",
    url: "https://www.curtisfisher.com/books",
  },
  alternates: {
    canonical: `/books`,
  },
};

export default async function SubscribePage() {
  return (
    <>
      <Header color="blue">
        <h1 className="lowercase mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Subscribe to Newsletter
        </h1>
        <p className="text-white/90">
          Get monthly updates on the latest insights and projects. Each month
          features a new article and a fresh project. Interested in staying
          informed? Subscribe here for regular updates.
        </p>
        <div className="mt-6">
          <iframe
            src="https://embeds.beehiiv.com/426e1d3a-3fd0-4367-ad7e-c2711f9938f7"
            data-test-id="beehiiv-embed"
            width="100%"
            height={320}
            style={{
              borderRadius: 4,
              border: "2px solid #e5e7eb",
              margin: 0,
              backgroundColor: "transparent",
            }}
          />
        </div>
      </Header>

      <Content as="section"></Content>
    </>
  );
}
