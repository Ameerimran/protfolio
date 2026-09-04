import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projects } from '../service/projects';
import { Project } from '../model/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  featuredProjects: Project[] = [];

  constructor(
    private titleService: Title,
    private projectsService: Projects,
  ) {
    this.titleService.setTitle('Ameer Imran');
  }

  ngOnInit(): void {
    this.featuredProjects = this.projectsService.getProjectsById(0);
  }
}
