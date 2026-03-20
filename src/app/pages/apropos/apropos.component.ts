import { Component, inject } from '@angular/core';
import { AboutMeService } from '../../services/about-me.service';

@Component({
  selector: 'app-apropos',
  imports: [],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {
  readonly aboutMeService = inject(AboutMeService);

  readonly description = this.aboutMeService.description;
  readonly skills = this.aboutMeService.skills;
}
