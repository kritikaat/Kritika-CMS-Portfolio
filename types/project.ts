export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  tags: string[];
  published: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface AboutInfo {
  id: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  location: string;
  email: string;
  linkedin?: string;
  github?: string;
}