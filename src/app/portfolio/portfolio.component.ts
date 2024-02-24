import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projectService: ProjectsService = new ProjectsService();
  projects: Project[] = this.projectService.getProjects();
  constructor(private titleService: Title) {
    this.titleService.setTitle('Akram Mohammad - Portfolio');
  }
}
