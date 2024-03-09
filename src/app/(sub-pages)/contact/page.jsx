import Calendar from "@/components/calendar";
import { Header } from "@/components/header";
import { Heading } from "@/components/ui/heading";

export const metadata = {
  title: "Get In Touch",
  description:
    "I love getting to know new people and hearing your stories. Let's chat!",
  openGraph: {
    title: "Get In Touch - Curtis Fisher",
    description:
      "I love getting to know new people and hearing your stories. Let's chat!",
    url: "https://www.curtisfisher.com/contact",
  },
  alternates: {
    canonical: `/contact`,
  },
};

export default async function ContactPage() {
  return (
    <>
      <Header noBorder>
        <Heading className="mb-4">Introduce Yourself.</Heading>
        <p>
          I love meeting and learning about new people around the world. No need
          to ask a question. Tell me where you are and what you&apos;re working
          on. I reply to all.
        </p>
        <p className="mt-4">
          <a
            className="underline underline-offset-8 decoration-gray-200 hover:decoration-gray-600 duration-200"
            href="mailto:me@curtisfisher.com"
          >
            me@curtisfisher.com
          </a>
        </p>
      </Header>
      <Calendar />
    </>
  );
}
