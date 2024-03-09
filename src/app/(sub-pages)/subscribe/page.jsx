import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { NewsletterForm } from "@/components/snippets/newsletter";
import Wide from "@/components/ui/formatting/wide";
import { Heading } from "@/components/ui/heading";

export const metadata = {
  title: "Subscribe",
  description:
    "Get monthly updates on the latest insights and projects. Each month features a new article and a fresh project. Interested in staying informed? Subscribe here for regular updates.",
  openGraph: {
    title: "Subscribe - Curtis Fisher",
    description:
      "Get monthly updates on the latest insights and projects. Each month features a new article and a fresh project. Interested in staying informed? Subscribe here for regular updates.",
    url: "https://www.curtisfisher.com/subscribe",
  },
  alternates: {
    canonical: `/subscribe`,
  },
};

export default async function SubscribePage() {
  return (
    <>
      <Header noBorder>
        <Heading className="mb-4">
          subscribe to mindful notes, delivered once per quarter.
        </Heading>
        <p>
          Do you really need a weekly blast from your favorite content creators?
          They&apos;re counting on this week being the one that you buy their
          course.
        </p>
        <p className="mt-4">
          As an essentialist, I focus on that which is valuable and essential.
          This newsletter is a no-fluff, bare-bones, four times per year
          institution.
        </p>
      </Header>
      <Content>
        <Wide>
          <NewsletterForm />
        </Wide>
        <p className="text-xs mt-4">
          If you don&apos;t see the subscribe form, you may have an ad-blocker
          installed that blocks it.
        </p>
      </Content>
    </>
  );
}
