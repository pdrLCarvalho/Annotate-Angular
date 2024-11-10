import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor(private apiHandler: ApiService) {}

  setAlert: boolean = false;
  saved: boolean = false;
  filters: string[] = ['Importante', 'Trabalho', 'Estudos', 'Lazer', 'Compras'];
  @Output() newTask: EventEmitter<boolean> = new EventEmitter();

  annotationForm: FormGroup = new FormGroup({
    annotation: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    filter: new FormControl(
      '',

      Validators.required
    ),
  });

  onSubmit() {
    if (this.isValid()) {
      this.apiHandler.create(this.annotationForm).subscribe(() => this.sent());
    } else {
      this.setAlert = true;
      setTimeout(() => {
        this.setAlert = false;
      }, 2000);
    }
  }
  isValid() {
    if (this.annotationForm.status === 'VALID') {
      return true;
    } else {
      return false;
    }
  }
  sent() {
    this.saved = true;
    this.newTask.emit(true);
    setTimeout(() => {
      this.saved = false;
    }, 2000);
  }
}
