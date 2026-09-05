import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../model/project';
import { Title } from '@angular/platform-browser';
import { Tags } from '../model/tags';
import { CommonModule } from '@angular/common';
import { Projects } from '../service/projects';
import { CollapseDirective } from "ngx-bootstrap/collapse";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCard, CommonModule, CollapseDirective, FormsModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  projects= [] as Project[];

  isCollapsed : boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  css: boolean = false;
  javascript: boolean = false;
  csharp: boolean = false;
  html: boolean = false;
  sql: boolean = false;
  filtering: boolean = false;


constructor(private titleservice: Title, private projectsService: Projects) {
  this.titleservice.setTitle('portfolio');
  this.projects = this.projectsService.getProjects();
}
 
  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  filter() {
    let filterTags: Tags[] = [];
    if (this.typescript) {
      filterTags.push(Tags.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tags.ANGULAR);
    }
    if (this.css) {
      filterTags.push(Tags.CSS);
    }
    if (this.javascript) {
      filterTags.push(Tags.JAVASCRIPT);
    }
    if (this.csharp) {
      filterTags.push(Tags.CSHARP);
    }
    if (this.html) {
      filterTags.push(Tags.HTML);
    }
    if (this.sql) {
      filterTags.push(Tags.SQL);
    }

    if (this.typescript || this.angular || this.css || this.javascript || this.csharp || this.html || this.sql) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectsService.getProjectsByFilter(filterTags);
  }

  reset() {
    this.typescript = false;
    this.angular = false;
    this.css = false;
    this.javascript = false;
    this.csharp = false;
    this.html = false;
    this.sql = false;
    this.filtering = false;

    this.projects = this.projectsService.getProjects();
  }
}
