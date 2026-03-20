import { Injectable, signal } from '@angular/core';
import { Page } from './page.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  readonly pages = signal<Page[]>([
    {
      label: 'A propos',
      linkRoute: 'apropos'
    },
    {
      label: 'Expériences',
      linkRoute: 'experiences'
    },
    {
      label: 'Projets',
      linkRoute: 'projets'
    },
    {
      label: 'Formation',
      linkRoute: 'formation'
    },
    {
      label: 'Liens',
      linkRoute: 'liens'
    }
  ]);
}
