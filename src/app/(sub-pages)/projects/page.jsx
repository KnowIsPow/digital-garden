import { BackToMainPage } from "@/components/back-button";
import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { books } from "@/data/books";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ongoing Projects",
  description:
    "Here's what I am currently working on as big projects in my life.",
  openGraph: {
    title: "Ongoing Projects - Curtis Fisher",
    description:
      "Here's what I am currently working on as big projects in my life.",
    url: "https://www.curtisfisher.com/projects",
  },
  alternates: {
    canonical: `/projects`,
  },
};

export default async function ProjectsPage() {
  return (
    <>
      <Header color="pink">
        <h1 className="lowercase mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Ongoing Projects.
        </h1>
        <p className="text-green-100">
          Public accountability is a great motivator. As I develop this page
          (and these projects), I aim to provide candid reflection of how well
          I&apos;m executing against my goals.
        </p>
      </Header>

      <Content>
        <ul className="space-y-8">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </ul>
      </Content>
    </>
  );
}

function Project({ project }) {
  return (
    <li className="border p-8">
      <h2
        className={`text-blue-700 text-lg ${project.previewImage && "hidden"}`}
      >
        {project.name}
      </h2>
      {project.previewImage && (
        <Image
          src={project.previewImage}
          className="w-auto h-12 mb-4"
          width={250}
          height={250}
          alt={project.name}
        />
      )}
      <p className="text-gray-500">Started {project.startDate}</p>
      <p className="mt-4">{project.description}</p>
      {project.objectives && (
        <>
          <div className="mt-4 font-medium">Key Objectives</div>
          <ul className="ml-4 space-y-2 mt-4">
            {project.objectives.map((objective) => (
              <li key={objective}>❗ {objective}</li>
            ))}
          </ul>
        </>
      )}
      {project.href && (
        <div className="mt-4">
          <Link
            className="text-blue-500 hover:underline"
            target="_blank"
            href={project.href}
          >
            View Project
          </Link>
        </div>
      )}
    </li>
  );
}
