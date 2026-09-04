import { Component, Input } from '@angular/core';
import { Project } from '../model/project';
import { NgFor} from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() project = {} as Project;
}