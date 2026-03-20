
import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { ThemeModeComponent } from '../theme-mode/theme-mode.component';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, RouterLinkActive, ThemeModeComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  readonly nav = inject(NavigationService).pages;
}
