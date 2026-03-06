
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  nav = [
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
      label: 'Liens',
      linkRoute: 'liens'
    }
  ];
}
