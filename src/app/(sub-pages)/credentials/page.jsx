import { BackToMainPage } from "@/components/back-button";
import { credentials } from "@/data/credentials";

export const metadata = {
  title: "My Credentials & Experiences",
  description:
    "This page serves to highlight which resources are backed by experience, and which are my own opinion and should be taken with a grain of salt.",
  openGraph: {
    title: "My Credentials & Experiences - Curtis Fisher",
    description:
      "This page serves to highlight which resources are backed by experience, and which are my own opinion and should be taken with a grain of salt.",
    url: "https://www.curtisfisher.com/experiences",
  },
  alternates: {
    canonical: `/credentials`,
  },
};

export default async function CredentialsPage() {
  return (
    <>
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <div className="mb-6">
          <BackToMainPage />
        </div>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
          Credentials.
        </h1>
        <p className="text-gray-500">
          It&apos;s important to consider the believability of resources.
          I&apos;m going to share a lot of resources and experiences on this
          website, but I&apos;m not an expert on everything shared. This page
          serves to highlight which resources are backed by experience, and
          which are my own opinion and should be taken with a grain of salt.
        </p>
      </header>

      <ul className="space-y-12">
        {credentials.map((credential) => (
          <Credential
            key={credential.company + credential.endDate}
            credential={credential}
          />
        ))}
      </ul>
    </>
  );
}

function Credential({ credential }) {
  return (
    <li>
      <h2 className="text-blue-700 text-lg">
        {credential.role}{" "}
        <span className="text-gray-500">@ {credential.company}</span>
      </h2>
      <p className="text-gray-500">
        {credential.startDate} - {credential.endDate}
      </p>
      <p className="mt-4">{credential.description}</p>
      {credential.accomplishments && (
        <ul className="ml-4 space-y-2 mt-4">
          {credential.accomplishments.map((accomplishment) => (
            <li key={accomplishment}>💪 {accomplishment}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
