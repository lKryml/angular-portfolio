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
  rxjs: boolean = false;
  java: boolean = false;
  js: boolean = false;
  html: boolean = false;
  css: boolean = false;
  sass: boolean = false;
  react: boolean = false;
  firebase: boolean = false;
  htmlcanvas: boolean = false;
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
    if (this.js) {
      filterTags.push(Tag.JS);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.firebase) {
      filterTags.push(Tag.FIREBASE);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.rxjs) {
      filterTags.push(Tag.RxJS);
    }
    if (this.htmlcanvas) {
      filterTags.push(Tag.HTMLCanvas);
    }
    if (this.sass) {
      filterTags.push(Tag.SASS);
    }
    if (
      this.typescript ||
      this.angular ||
      this.js ||
      this.css ||
      this.html ||
      this.htmlcanvas ||
      this.java ||
      this.react ||
      this.rxjs ||
      this.sass ||
      this.firebase
    ) {
      this.isFiltering = true;
    } else {
      this.isFiltering = false;
    }
    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilter() {
    this.typescript = false;
    this.angular = false;
    this.rxjs = false;
    this.java = false;
    this.js = false;
    this.css = false;
    this.sass = false;
    this.react = false;
    this.firebase = false;
    this.htmlcanvas = false;
    this.isFiltering = false;
    this.projects = this.projectService.getProjects();
  }
}
