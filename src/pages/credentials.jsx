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
        <div className="space-y-4 mt-6">
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
    <div className="p-4 shadow bg-white">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="display display-md">{experience.role}</h2>
        <div className="body text-gray-400">
          {experience.startDate} – {experience.endDate}
        </div>
      </div>

      <div className="body display-sm">{experience.company}</div>
      <div className="body text-gray-400">{experience.location}</div>
      <p className="body mt-4">{experience.description}</p>
      {experience.accomplishments && <BulletedList items={experience.accomplishments} />}
    </div>
  );
}
