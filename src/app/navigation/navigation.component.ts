import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, NgFor],
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
    }
  ];
}
