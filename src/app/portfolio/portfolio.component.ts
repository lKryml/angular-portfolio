import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Python Project',
      pictures: [
        '../../assets/Image1.png',
        '../../assets/Image2.png',
        '../../assets/Image3.png',
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
        '../../assets/Image1.png',
        '../../assets/Image2.png',
        '../../assets/Image3.png',
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
        '../../assets/Image1.png',
        '../../assets/Image2.png',
        '../../assets/Image3.png',
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
        '../../assets/Image1.png',
        '../../assets/Image2.png',
        '../../assets/Image3.png',
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
        '../../assets/Image1.png',
        '../../assets/Image2.png',
        '../../assets/Image3.png',
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
        '../../assets/Image1.png',
        '../../assets/Image2.png',
        '../../assets/Image3.png',
      ],
      projectLink: '//www.github.com',
      summary:
        'Mobile app developed in java that tracks the departure and arrival of trains.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.JS],
    },
  ];
  constructor(private titleService: Title) {
    this.titleService.setTitle('Akram Mohammad - Portfolio');
  }
}
