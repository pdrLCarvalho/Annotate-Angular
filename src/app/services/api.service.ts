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
    'https://crudcrud.com/api/e9c8897eeb034b45ad6640a50cc99203';
  private path: string = '/annotations';

  create(annotation: FormGroup) {
    const payload = annotation.getRawValue();

    return this.http.post(this.url + this.path, payload);
  }
  getAll() {
    return this.http.get<Annotation[]>(this.url + this.path);
  }
  delete(annotationId: string) {
    return this.http.delete<Annotation[]>(
      `${this.url}${this.path}/${annotationId}`
    );
  }
}
