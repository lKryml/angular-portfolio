import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  isFiltering: boolean = false;
  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Akram Mohammad - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filterProjects() {
    let filterTags: Tag[] = [];
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.typescript || this.angular) {
      this.isFiltering = true;
    } else {
      this.isFiltering = false;
    }
    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilter() {
    this.typescript = false;
    this.angular = false;
    this.isFiltering = false;
    this.projects = this.projectService.getProjects();
  }
}
