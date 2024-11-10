import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Annotation } from 'src/app/models/annotation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private apihandler: ApiService) {}
  @Input() title: string = 'Título do Filtro';
  @Input() refresh: number = 0;
  arrtasks: Annotation[] = [];

  ngOnInit(): void {
    this.loadTasks();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refresh']) {
      this.loadTasks();
    }
  }
  loadTasks() {
    this.apihandler
      .getAll()
      .subscribe((response) => (this.arrtasks = response));
  }
}
