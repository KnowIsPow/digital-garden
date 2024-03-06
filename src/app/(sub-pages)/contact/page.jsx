import Calendar from "@/components/calendar";
import { Header } from "@/components/header";

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
      <Header color="red">
        <h1 className="lowercase mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Contact curtis.
        </h1>
        <p className="text-white/90">
          I love meeting and learning about new people around the world. No need
          to ask a question. Tell me where you are and what you&apos;re working
          on. I reply to all.
        </p>
        <p className="mt-4">
          <a
            className="text-red-400 hover:underline"
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
