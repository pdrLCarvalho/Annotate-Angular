import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { map } from 'rxjs';

import { Annotation } from 'src/app/models/annotation';
import { Filter } from 'src/app/models/filter';
import { ApiService } from 'src/app/services/api.service';
import { RouteFiltersService } from 'src/app/services/route-filters.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit, OnChanges {
  constructor(
    private apihandler: ApiService,
    public routeFilter: RouteFiltersService
  ) {}

  @Input() refresh: number = 0;
  arrtasks: Annotation[] = [];
  currentDate: Date = new Date();
  Filters = Filter;
  importantArr: Annotation[] = [];
  todayArr: Annotation[] = [];
  studyArr: Annotation[] = [];
  workArr: Annotation[] = [];
  shopArr: Annotation[] = [];
  leisureArr: Annotation[] = [];

  editTaskId: string | null = null;
  editAnnotation: string = '';
  editDate: Date = new Date();

  ngOnInit(): void {
    this.loadTasks();
    this.loadFilteredTasks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refresh']) {
      this.loadTasks();
      this.loadFilteredTasks();
    }
  }

  loadTasks() {
    this.apihandler
      .getAll()
      .subscribe((response) => (this.arrtasks = response));
  }

  loadFilteredTasks() {
    this.apihandler
      .getAll()
      .pipe(
        map((response: Annotation[]) => {
          this.todayArr = this.filterByDay(response);
          this.importantArr = this.filterArray(response, Filter.Importante);
          this.studyArr = this.filterArray(response, Filter.Estudos);
          this.workArr = this.filterArray(response, Filter.Trabalho);
          console.log(response);

          this.shopArr = this.filterArray(response, Filter.Compras);
          this.leisureArr = this.filterArray(response, Filter.Lazer);
        })
      )
      .subscribe();
  }
  onDelete(task: Annotation) {
    this.apihandler.delete(task._id).subscribe((response) => {
      this.loadTasks();
      this.loadFilteredTasks();
    });
  }
  filterArray(arr: Annotation[], filter: Filter) {
    const newArray: Annotation[] = [];
    arr.filter((item) => {
      if (item.filter == filter) {
        newArray.push(item);
      }
    });
    return newArray;
  }
  filterByDay(arr: Annotation[]) {
    const newArray: Annotation[] = [];
    const today = new Date();

    arr.filter((item) => {
      let data = new Date(item.date + 'T00:00:00-03:00');

      if (
        data.getDay === today.getDay &&
        data.getMonth === today.getMonth &&
        data.getFullYear === today.getFullYear
      ) {
        newArray.push(item);
      }
    });
    return newArray;
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
      filter: task.filter, // Certifique-se de que `filter` é incluído
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
