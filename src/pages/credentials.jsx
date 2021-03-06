import { workExperience } from 'data/work-experience';
import Page from 'features/page';
import { BulletedList } from 'ui/content/bulleted-list';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function CredentialsPage({}) {
  return (
    <Page
      title="Credentials"
      description="This page serves to highlight which resources are backed by experience, and which are my own opinion and should be taken with a grain of salt."
      canonical="/credentials"
    >
      <Container>
        <TitleWithDescription
          title="Credentials"
          description="It's important to consider the believability of resources. I'm going to share a lot of resources and experiences on this website, but I'm not an expert on everything I share. This page serves to highlight which resources are backed by experience, and which are my own opinion and should be taken with a grain of salt."
          wide
        />
        <div className="mt-6 space-y-4 md:space-y-6">
          {workExperience.map((experience) => (
            <WorkExperience
              key={experience.company + '_' + experience.startDate}
              experience={experience}
            />
          ))}
        </div>
      </Container>
    </Page>
  );
}

function WorkExperience({ experience }) {
  return (
    <div className="p-4 border md:p-6">
      <div className="flex flex-wrap items-center justify-between">
        <h2>{experience.role}</h2>
        <div className="text-gray-400">
          {experience.startDate} – {experience.endDate}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <div>{experience.company}</div>
        <div className="text-gray-400">{experience.location}</div>
      </div>
      <p className="mt-4">{experience.description}</p>
      {experience.accomplishments && <BulletedList items={experience.accomplishments} />}
    </div>
  );
}
