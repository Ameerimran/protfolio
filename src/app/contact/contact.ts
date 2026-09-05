import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  email = 'ameerimran28@gmail.com';
  linkedInUrl = 'https://www.linkedin.com/in/muhamad-ameer-713445311';
  copied = false;

  constructor(private titleservice: Title) {
    this.titleservice.setTitle('contact');
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.email)
      .then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 1000);
      })
      .catch(() => {
        console.warn('Unable to copy email to clipboard');
      });
  }
}
