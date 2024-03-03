import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Python Project',
      pictures: [
        '../../assets/aleksandra-skiba-ghostnightwearhd.jpg',
        '../../assets/anne-isaksson-v-rising-competition3-black.jpg',
        '../../assets/anne-isaksson-v-rising-competition3.jpg',
      ],
      projectLink: '//www.github.com',
      summary: 'Python project that analyzes stock market data.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.REACT],
    },
    {
      id: 1,
      name: 'Sample Angular App',
      pictures: [
        '../../assets/aleksandra-skiba-ghostnightwearhd.jpg',
        '../../assets/anne-isaksson-v-rising-competition3-black.jpg',
        '../../assets/anne-isaksson-v-rising-competition3.jpg',
      ],
      projectLink: '//www.github.com',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.ANGULAR],
    },
    {
      id: 2,
      name: 'Sample .Net App',
      pictures: [
        '../../assets/aleksandra-skiba-ghostnightwearhd.jpg',
        '../../assets/anne-isaksson-v-rising-competition3-black.jpg',
        '../../assets/anne-isaksson-v-rising-competition3.jpg',
      ],
      projectLink: '//www.github.com',
      summary: 'Fullstack web app developed using React and ASP.NET',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.REACT],
    },
    {
      id: 3,
      name: 'Web API Project',
      pictures: [
        '../../assets/aleksandra-skiba-ghostnightwearhd.jpg',
        '../../assets/anne-isaksson-v-rising-competition3-black.jpg',
        '../../assets/anne-isaksson-v-rising-competition3.jpg',
      ],
      projectLink: '//www.github.com',
      summary: 'Web API Project that was developed for a class project.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [],
    },
    {
      id: 4,
      name: 'Chrome Extension',
      pictures: [
        '../../assets/aleksandra-skiba-ghostnightwearhd.jpg',
        '../../assets/anne-isaksson-v-rising-competition3-black.jpg',
        '../../assets/anne-isaksson-v-rising-competition3.jpg',
      ],
      projectLink: '//www.github.com',
      summary:
        'Developed a chrome extension that tracks the prices of furniture.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.JS],
    },
    {
      id: 5,
      name: 'Mobile App',
      pictures: [
        '../../assets/aleksandra-skiba-ghostnightwearhd.jpg',
        '../../assets/anne-isaksson-v-rising-competition3-black.jpg',
        '../../assets/anne-isaksson-v-rising-competition3.jpg',
      ],
      projectLink: '//www.github.com',
      summary:
        'Mobile app developed in java that tracks the departure and arrival of trains.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.JS],
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    const project = this.projects.find((proj) => proj.id === id);

    if (project === undefined)
      throw new TypeError('no projects with this id' + id);

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach((project) => {
      let foundAll = true;

      filterTags.forEach((filterTag) => {
        if (project.tags.includes(filterTag) === false) {
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
