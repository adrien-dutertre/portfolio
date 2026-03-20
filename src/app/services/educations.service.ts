import { Injectable } from '@angular/core';
import { EducationModel } from './education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationsService {
  readonly education: EducationModel[] = [
    {
      school: "Mise a niveau développement web",
      startDate: "Avril 2024",
      endDate: "Aujourd'hui",
      skills: {
        masteredSkills: ["HTML", "CSS", "Javascript", "Typescript", "Angular", "Web Components", "Git", "Cypress", "Material", "TailwindCSS"]
      }
    },
    {
      school: "Ecole Nationale Supérieure de Cognitique",
      startDate: "Septembre 2010",
      endDate: "Septembre 2013",
      diploma: "Diplôme d'ingénieur",
      skills: {
        masteredSkills: ["HTML", "SQL", "PHP", "Prolog", "C#", "Flash ActionScript"]
      }
    }
  ];
}
