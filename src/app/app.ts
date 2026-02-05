import { Component } from '@angular/core';
import { ExternalLinksMenuComponent } from './Components/external-links-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExternalLinksMenuComponent],
  template: `
    <app-external-links-menu></app-external-links-menu>
  `
})
export class App {}
