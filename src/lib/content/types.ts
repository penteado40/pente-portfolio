export type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type DevContent = {
  bio: string[];
  skills: SkillGroup[];
  projects: Project[];
};

export type Track = {
  title: string;
  artist: string;
  url: string;
  cover?: string;
};

export type Service = {
  title: string;
  description: string;
};

export type GearGroup = {
  category: string;
  items: string[];
};

export type Credit = {
  name: string;
  role: string;
};

export type AudioContent = {
  bio: string[];
  tracks: Track[];
  services: Service[];
  gear: GearGroup[];
  credits: Credit[];
};
