import { SkillsModel } from "./skills.model";

export interface ExperienceModel {
    enterprise: string;
    startDate: string;
    endDate: string;
    job: string;
    description: string;
    skills: SkillsModel;
}
