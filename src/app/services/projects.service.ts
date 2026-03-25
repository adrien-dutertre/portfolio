import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  readonly projects = signal([
    {
      name: "First",
      description: "Bla bla bla"
    },
    {
      name: "Second",
      description: "Bli bli bli"
    }
  ]
  );
}
