import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string =
    'https://crudcrud.com/api/9787e42083524b23a1bcc597837838bf';
  private path: string = '/annotations';

  constructor(private http: HttpClient) {}

  create(annotation: FormGroup) {
    console.log(annotation);

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
    this.http.get(this.url + this.path).subscribe({
      next: (response) => {
        console.log(response);
      },
      complete: () => {
        console.log('finalizado');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
