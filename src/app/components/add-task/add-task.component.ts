import { Component } from '@angular/core';
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
  filters: string[] = ['Importante', 'Trabalho', 'Estudos', 'Lazer', 'Compras'];
  annotationForm: FormGroup = new FormGroup({
    annotation: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    filter: new FormControl(
      '',
      Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(300),
        Validators.required,
      ])
    ),
  });

  onSubmit() {
    if (this.isValid()) {
      this.apiHandler.create(this.annotationForm);
      this.apiHandler.getAll();
    } else {
      this.setAlert = true;
    }
  }
  isValid() {
    if (this.annotationForm.status === 'VALID') {
      return true;
    } else {
      return false;
    }
  }
}
