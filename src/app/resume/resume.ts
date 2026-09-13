import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent, AccordionPanelComponent } from "ngx-bootstrap/accordion";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionComponent, AccordionPanelComponent],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  workOpen = true;
  educationOpen = false;
  skillsOpen = false;

  constructor(private titleservice: Title, private renderer: Renderer2) {
    this.titleservice.setTitle('resume');
  }
  downloadResume() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Ameer_Imran_CV.pdf');
    link.setAttribute('download', 'Ameer_Imran_Resume.pdf');
    link.click();
    link.remove();
  }
}
