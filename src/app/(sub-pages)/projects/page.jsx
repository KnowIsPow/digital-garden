import { BackToMainPage } from "@/components/back-button";
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
      <header className="pb-10 mb-10 border-b border-gray-200 sm:mb-16 sm:pb-16">
        <div className="mb-6">
          <BackToMainPage />
        </div>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-blue-700 lowercase sm:text-4xl">
          Ongoing Projects.
        </h1>
        <p className="text-gray-500">
          Public accountability is a great motivator. As I develop this page
          (and these projects), I aim to provide candid reflection of how well
          I&apos;m executing against my goals.
        </p>
      </header>

      <ul className="space-y-12">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </ul>
    </>
  );
}

function Project({ project }) {
  return (
    <li>
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
