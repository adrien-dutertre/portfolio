import { Component, inject } from '@angular/core';
import { ExperiencesService } from '../../services/experiences.service';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  readonly experiences = inject(ExperiencesService).experiences;
}
