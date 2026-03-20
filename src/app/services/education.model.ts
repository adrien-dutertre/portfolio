import { SkillsModel } from "./skills.model";

export interface EducationModel {
    school: string,
    startDate: string,
    endDate: string,
    diploma?: string,
    skills: SkillsModel,
}
