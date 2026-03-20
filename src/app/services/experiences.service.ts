import { Injectable } from '@angular/core';
import { ExperienceModel } from './experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  readonly experiences: ExperienceModel[] = [
    {
      enterprise: "Exalt",
      startDate: "Mars 2022",
      endDate: "Juillet 2025",
      job: "UX Designer & Développeur Front",
      description: "En mission pour EDF, accompagnement du développement d’outils métier à destination des producteurs d’électricité nucléaire. Aide de plusieurs équipes produit dans la compréhension des usages et la conception d’une solution adaptée aux besoins métiers. Suivi des développements : le lien entre le design et les développeurs, notamment avec l’usage des Design Systems EDF.",
      skills: {
        masteredSkills: ["UX Design", "Figma", "Design System EDF", "Angular", "Framework Agile"]
      }
    },
    {
      enterprise: "Avanade",
      startDate: "Juillet 2014",
      endDate: "Février 2022",
      job: "UX Designer",
      description: "Accompagnement de plusieurs clients sur les processus UX : Thales, Airbus, Ministère de l’Intérieur, EDF, ErDF,...",
      skills: {
        masteredSkills: ["UX Design", "Sketch", "Framework Agile"]
      }
    },
    {
      enterprise: "Mikros Image",
      startDate: "Septembre 2013",
      endDate: "Février 2014",
      job: "Développeur Web",
      description: "Dans une équipe de 3 développeurs, développement et refactoring d’un outil de gestion d’assets média (documents, images, vidéos) autour du framework Java/Play. Refactoring fullstack JS/jquery/HTML/Java (Framework Play), access Control Lists et utilisateurs, persistance vers CouchDB, réalisation des tests unitaires Junit, documentation du code",
      skills: {
        masteredSkills: ["HTML", "CSS", "JS/jquery", "Java", "Play", "JUnit", "CouchDB"]
      }
    },
    {
      enterprise: "Airbus EADS Astrium",
      startDate: "Mai 2012",
      endDate: "Août 2012",
      job: "Développeur Java/Swing",
      description: "Pour une équipe d’ingénieurs radio, développement d’un client lourd permettant à ces derniers de paramétrer un fichier de configuration nécessaire à leurs calculs. Récolte du besoin, entretiens avec les ingénieurs en transmission radio, analyse et conception, maquettage avec Balsamiq Mockups, génération du fichier de configuration des calculs, tests utilisateurs pour validation",
      skills: {
        masteredSkills: ["UX Design", "Balsamiq Mockups", "Java", "Java Swing"]
      }
    },
  ];
}
