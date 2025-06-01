import notion from './notion';
import { Project, Experience, Certification, AboutInfo } from '../types/project';

export async function getProjects(): Promise<Project[]> {
  const databaseId = process.env.NOTION_PROJECTS_DB_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: { equals: true },
    },
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  });

  const projects = response.results.map((page: any) => {
    const props = page.properties;
    return {
      id: page.id,
      name: props.Name?.title[0]?.plain_text || '',
      description: props.Description?.rich_text[0]?.plain_text || '',
      link: props.Link?.url || '',
      tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      published: props.Published?.checkbox || false,
    };
  });

  return projects;
}

export async function getExperience(): Promise<Experience[]> {
  const databaseId = process.env.NOTION_EXPERIENCE_DB_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'StartDate',
        direction: 'descending',
      },
    ],
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    return {
      id: page.id,
      company: props.Company?.title[0]?.plain_text || '',
      position: props.Position?.rich_text[0]?.plain_text || '',
      duration: props.Duration?.rich_text[0]?.plain_text || '',
      description: props.Description?.rich_text[0]?.plain_text || '',
      technologies: props.Technologies?.multi_select?.map((tech: any) => tech.name) || [],
    };
  });
}

export async function getCertifications(): Promise<Certification[]> {
  const databaseId = process.env.NOTION_CERTIFICATIONS_DB_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    return {
      id: page.id,
      name: props.Name?.title[0]?.plain_text || '',
      issuer: props.Issuer?.rich_text[0]?.plain_text || '',
      date: props.Date?.date?.start || '',
      credentialId: props.CredentialId?.rich_text[0]?.plain_text || '',
      link: props.Link?.url || '',
    };
  });
}

export async function getAboutInfo(): Promise<AboutInfo> {
  const databaseId = process.env.NOTION_ABOUT_DB_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 1,
  });

  const page = response.results[0];
  if (!page) throw new Error('About info not found');

  const props = (page as any).properties;
  return {
    id: page.id,
    name: props.Name?.title[0]?.plain_text || '',
    title: props.Title?.rich_text[0]?.plain_text || '',
    bio: props.Bio?.rich_text[0]?.plain_text || '',
    skills: props.Skills?.multi_select?.map((skill: any) => skill.name) || [],
    location: props.Location?.rich_text[0]?.plain_text || '',
    email: props.Email?.email || '',
    linkedin: props.LinkedIn?.url || '',
    github: props.GitHub?.url || '',
  };
}