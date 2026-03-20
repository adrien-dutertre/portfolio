import { Component, inject } from '@angular/core';
import { EducationsService } from '../../services/educations.service';

@Component({
  selector: 'app-formation',
  imports: [],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css',
})
export class FormationComponent {
  readonly educations = inject(EducationsService).education;
}
