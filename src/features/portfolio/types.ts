export type SectionId =
  | 'home'
  | 'about'
  | 'experience'
  | 'expertise'
  | 'projects'
  | 'education'
  | 'certifications'
  | 'contact';
export type ProjectCategory = 'fullstack' | 'frontend' | 'qa';
export interface Certification {
  readonly id: number;
  readonly title: string;
  readonly issuer: string;
  readonly date: string;
  readonly desc: string;
  readonly image: string;
  readonly credential?: string;
}
export interface Project {
  readonly id: string;
  readonly category: ProjectCategory;
  readonly image?: string;
  readonly alt?: string;
  readonly visual?: 'salon' | 'portfolio';
  readonly label: string;
  readonly status: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly detail?: string;
  readonly features: readonly string[];
  readonly technologies: readonly string[];
  readonly links: readonly { readonly href: string; readonly label: string }[];
}
export interface ExperienceEntry {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly date: string;
  readonly current: boolean;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
}
