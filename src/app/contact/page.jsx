import { BackToMainPage } from "@/components/back-button";

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
};

export default async function ContactPage() {
  return (
    <>
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <div className="mb-6">
          <BackToMainPage />
        </div>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
          Contact curtis.
        </h1>
        <p className="text-gray-500 mb-12">
          I love meeting and learning about new people around the world. No need
          to ask a question. Tell me where you are and what you&apos;re working
          on. I reply to all.
        </p>
        <a
          className="text-blue-400 hover:underlin"
          href="mailto:me@curtisfisher.com"
        >
          me@curtisfisher.com
        </a>
      </header>
    </>
  );
}
