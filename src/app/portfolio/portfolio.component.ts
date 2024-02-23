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
  project: Project = {
    id: 0,
    name: 'SamuraiScrim',
    summary: '2D Fighter Game made with HTML Canvas',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.JS, Tag.REACT],
    pictures: [],
  };
  constructor(private titleService: Title) {
    this.titleService.setTitle('Akram Mohammad - Portfolio');
  }
}
