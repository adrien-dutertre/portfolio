import { Component, DOCUMENT, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThemeModeComponent } from './components/theme-mode/theme-mode.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, ThemeModeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  router = inject(Router);
  document = inject(DOCUMENT); // Pour éviter une erreur de "ERROR ReferenceError: document is not defined"

  // Navigation au clavier
  ngOnInit(): void {
    this.document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "a" :
        this.router.navigateByUrl('/apropos');
        break;
      case "e" :
        this.router.navigateByUrl('/experiences');
        break;
      case "p" :
        this.router.navigateByUrl('/projets');
        break;
      case "f" :
        this.router.navigateByUrl('/formation');
        break;
      case "l" :
        this.router.navigateByUrl('/liens');
        break;
      default:
        break;
    }
  })
    
  }
}
