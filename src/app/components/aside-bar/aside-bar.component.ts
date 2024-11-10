import { Component, Input, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { User } from 'src/app/models/userInfos';


@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css'],
})
export class AsideBarComponent {
  user: string | null = null

  constructor(public databaseservice: DataBaseService) {}

  ngOnInit () {
    this.user = this.databaseservice.userLogged?.name || null
  }

  menuIsOpen: boolean = false;

  openClose(): void {
    this.menuIsOpen = !this.menuIsOpen;
    console.log(this.menuIsOpen);
  }

  logout() {
    this.databaseservice.userLogged = null
  }
}
