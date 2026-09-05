import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { Tags } from '../model/tags';

@Injectable({
  providedIn: 'root',
})
export class Projects {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Python Project',
      description: 'Python project that analyzes stock market data.',
      imageUrl: '../../assets/Image1.png',
      projectUrl: 'https://www.github.com',
      tags: [Tags.PYTHON],
    },
    {
      id: 1,
      name: 'Sample Angular App',
      description: 'Fullstack web app developed using Angular and Node.js',
      imageUrl: '../../assets/Image1.png',
      projectUrl: 'https://www.github.com',
      tags: [Tags.ANGULAR, Tags.TYPESCRIPT, Tags.NODEJS],
    },
    {
      id: 2,
      name: 'Sample .Net App',
      description: 'Fullstack web app developed using React and ASP.NET',
      imageUrl: '../../assets/Image1.png',
      projectUrl: 'https://www.github.com',
      tags: [Tags.REACT, Tags.CSHARP, Tags.ASPNET],
    },
    {
      id: 3,
      name: 'Web API Project',
      description: 'Web API Project that was developed for a class project.',
      imageUrl: '../../assets/Image1.png',
      projectUrl: 'https://www.github.com',
      tags: [Tags.CSHARP, Tags.ASPNET],
    },
    {
      id: 4,
      name: 'Chrome Extension',
      description: 'Developed a chrome extension that tracks the prices of furniture.',
      imageUrl: '../../assets/Image1.png',
      projectUrl: 'https://www.github.com',
      tags: [Tags.JAVASCRIPT],
    },
    {
      id: 5,
      name: 'Mobile App',
      description: 'Mobile app developed in Java that tracks the departure and arrival of trains.',
      imageUrl: '../../assets/Image1.png',
      projectUrl: 'https://www.github.com',
      tags: [Tags.JAVA],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project {
    const project = this.projects.find((project) => project.id === id);

    if (!project) {
      throw new Error(`Project with id ${id} not found`);
    }

    return project;
  }

  getProjectsById(id: number): Project[] {
    return this.projects.filter((project) => project.id === id);
  }

  getProjectsByFilter(filterTags: Tags[]): Project[] {
    let filteredProjects: Project[] = [];

    this.projects.forEach( function(project) {
      let foundAll = true;

      filterTags.forEach(function(filterTag) {
        if (!project.tags.includes(filterTag) == false ) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });


    return filteredProjects;
  }
}
