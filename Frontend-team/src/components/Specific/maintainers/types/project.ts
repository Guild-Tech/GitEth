export interface ProjectFormData {
  projectName: string;
  shortDescription: string;
  longDescription: string;
  links: string[];
  projectLeads: string[];
  preferredSkills: string[];
  skillCategory: string;
  skillLevel: string;
}

export type ProjectVisual = File | null;