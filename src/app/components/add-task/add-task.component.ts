import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  annotationForm: FormGroup = new FormGroup({
    annotation: new FormControl(
      null,
      Validators.compose([
        Validators.min(5),
        Validators.max(300),
        Validators.required,
      ])
    ),
    date: new FormControl(null, [Validators.required]),
    filter: new FormControl(
      null,
      Validators.compose([
        Validators.min(5),
        Validators.max(300),
        Validators.required,
      ])
    ),
  });
}
