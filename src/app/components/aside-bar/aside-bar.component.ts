import { Component, Input, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { User } from 'src/app/models/userInfos';
import { RouteFiltersService } from 'src/app/services/route-filters.service';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css'],
})
export class AsideBarComponent {
  user: string | null = null;
  filters = Filter;

  constructor(
    public databaseservice: DataBaseService,
    private routeFiltersService: RouteFiltersService
  ) {}

  ngOnInit() {
    this.user = this.databaseservice.userLogged?.name || null;
  }

  menuIsOpen: boolean = false;

  openClose(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  logout() {
    this.databaseservice.userLogged = null;
    this.databaseservice.currentPage = 'LOGIN';
  }
  setPage(filter: Filter) {
    this.routeFiltersService.setCurrentPage(filter);
  }
}
