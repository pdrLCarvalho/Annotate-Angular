import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Annotation } from 'src/app/models/annotation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit, OnChanges {
  constructor(private apihandler: ApiService) {}

  @Input() title: string = 'Título do Filtro';
  @Input() refresh: number = 0;
  arrtasks: Annotation[] = [];
  editTaskId: string | null = null;
  editAnnotation: string = '';
  editDate: Date = new Date();

  ngOnInit(): void {
    this.loadTasks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refresh']) {
      this.loadTasks();
    }
  }

  loadTasks() {
    this.apihandler.getAll().subscribe((response) => (this.arrtasks = response));
  }

  onDelete(task: Annotation) {
    this.apihandler.delete(task._id).subscribe(() => this.loadTasks());
  }

  onEdit(task: Annotation) {
    this.editTaskId = task._id;
    this.editAnnotation = task.annotation;
    this.editDate = task.date;
  }

  saveEdit(task: Annotation) {
    const updatedAnnotation: Annotation = {
      _id: task._id,
      annotation: this.editAnnotation,
      date: this.editDate,
      filter: task.filter // Certifique-se de que `filter` é incluído
    };

    this.apihandler.update(task._id, updatedAnnotation).subscribe(() => {
      this.loadTasks();
      this.cancelEdit();
    });
  }

  cancelEdit() {
    this.editTaskId = null;
    this.editAnnotation = '';
    this.editDate = new Date();
  }
}