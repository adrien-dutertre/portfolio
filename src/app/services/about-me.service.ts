import { Injectable } from '@angular/core';
import { SkillsModel } from './skills.model';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  readonly description: string = "Je suis développeur front-end spécialisé en Angular depuis la version 17, avec plus de 12 ans d’expérience dans le monde des entreprises.\nJ’accompagne les équipes dans le développement et l’intégration d’applications métier.";
  readonly skills: SkillsModel[] = [
    {
      category: "Langages",
      masteredSkills: ["HTML", "CSS", "Javascript", "Typescript"],
      secondarySkills: ["SQL", "PHP", "Java", "C#"]
    },
    {
      category: "Frameworks",
      masteredSkills: ["Angular (depuis v.17)"],
      secondarySkills: ["Play"]
    },
    {
      category: "Librairies",
      masteredSkills: ["Design System", "Material", "Bootstrap", "TailwindCSS"],
      secondarySkills: ["Java Swing"]
    },
    {
      category: "Base de données",
      secondarySkills: ["MySQL", "CouchDB"]
    },
    {
      category: "Outils de test",
      masteredSkills: ["Cypress"],
      secondarySkills: ["JUnit"]
    },
    {
      category: "Autres outils de dév",
      masteredSkills: ["Web Components", "Git", "API Rest", "Framework Agile (SCRUM)"],
      secondarySkills: ["NodeJS", "npm"]
    },
    {
      category: "Design",
      masteredSkills: ["UX Design", "Figma", "Accessibilité numérique"]
    },
    {
      category: "Langues",
      masteredSkills: ["Anglais professionnel"]
    },
  ];
}
