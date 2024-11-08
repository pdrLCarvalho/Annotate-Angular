import { Component, Input } from '@angular/core';
import { Annotation } from 'src/app/models/annotation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  constructor(private apihandler: ApiService) {
    this.apihandler.getAll().subscribe({
      next: (response) => {
        this.arrtasks = response;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        return this.arrtasks;
      },
    });
  }
  @Input() title: string = 'Título do Filtro';
  arrtasks: Annotation[] = [];
}
