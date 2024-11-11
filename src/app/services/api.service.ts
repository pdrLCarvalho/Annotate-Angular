import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Annotation } from '../models/annotation';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://crudcrud.com/api/b8aa1d2671ee4a1baa3a807fa786d4a9';
  private path: string = '/annotations';

  constructor(private http: HttpClient) {}

  create(annotation: FormGroup) {
    const payload = annotation.getRawValue();
    return this.http.post(this.url + this.path, payload);
  }

  getAll() {
    return this.http.get<Annotation[]>(this.url + this.path);
  }

  delete(annotationId: string) {
    return this.http.delete<Annotation[]>(`${this.url}${this.path}/${annotationId}`);
  }

  // Novo método de atualização
  update(annotationId: string, updatedAnnotation: Annotation) {
    return this.http.put<Annotation>(
      `${this.url}${this.path}/${annotationId}`,
      updatedAnnotation
    );
  }
}

