import { Component, DOCUMENT, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-theme-mode',
  imports: [],
  templateUrl: './theme-mode.component.html',
  styleUrl: './theme-mode.component.css',
})
export class ThemeModeComponent implements OnInit {
  lightTheme = signal<boolean>(true);
  document = inject(DOCUMENT);

  // Changement du thème, true = thème clair
  setMode(): void {
    this.document.documentElement.classList.toggle('dark', this.lightTheme());
    this.lightTheme.update(value => !value);
  }

  ngOnInit(): void {
    this.lightTheme.set(true);

    this.document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 't':
          this.setMode();
          break;
        default:
          break;
      }
    });
  }
}
