import { Injectable } from '@angular/core';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root',
})
export class RouteFiltersService {
  private currentPage: Filter = Filter.Importante;

  constructor() {}
  getCurrentPage(): Filter {
    return this.currentPage;
  }
  setCurrentPage(filter: Filter) {
    this.currentPage = filter;
  }
}
