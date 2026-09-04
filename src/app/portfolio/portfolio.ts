import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../model/project';
import { Title } from '@angular/platform-browser';
import { Tags } from '../model/tags';
import { CommonModule } from '@angular/common';
import { Projects } from '../service/projects';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCard, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  projects= [] as Project[];

constructor(private titleservice: Title, private projectsService: Projects) {
  this.titleservice.setTitle('Ameer Imran');
  this.projects = this.projectsService.getProjects();
}
 
  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
