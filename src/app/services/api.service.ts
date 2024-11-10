import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Annotation } from '../models/annotation';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private url: string =
    'https://crudcrud.com/api/8808553d7b5341569e60e546b2fb8bd3';
  private path: string = '/annotations';

  create(annotation: FormGroup) {
    const payload = annotation.getRawValue();

    return this.http.post(this.url + this.path, payload);
  }
  getAll() {
    return this.http.get<Annotation[]>(this.url + this.path);
  }
}
