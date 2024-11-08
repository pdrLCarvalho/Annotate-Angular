import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Annotation } from '../models/annotation';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string =
    'https://crudcrud.com/api/30f93583029449d8996f2c96b989d0b4';
  private path: string = '/annotations';

  constructor(private http: HttpClient) {}
  tasks: Annotation[] = [];
  create(annotation: FormGroup) {
    const payload = annotation.getRawValue();
    this.http.post(this.url + this.path, payload).subscribe({
      next: (response) => {
        console.log(response);
      },
      complete: () => {
        console.log('feito');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  getAll() {
    return this.http.get<Annotation[]>(this.url + this.path);
  }
}
