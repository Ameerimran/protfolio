import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,
            Nav, 
            RouterOutlet, 
            CollapseModule, 
            FormsModule,
            AccordionModule,
          ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('protfolio');
}
