import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { Heading } from "@/components/ui/heading";
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
      <Header>
        <Heading className="mb-4">Credentials.</Heading>
        <p>
          I&apos;m not an expert on everything shared in this digital garden.
          This page differentiates resourced-backed experiences from conjecture.
        </p>
      </Header>

      <Content>
        <ul className="space-y-12">
          {credentials.map((credential) => (
            <Credential
              key={credential.company + credential.endDate}
              credential={credential}
            />
          ))}
        </ul>
      </Content>
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
