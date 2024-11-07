import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css'],
})
export class AsideBarComponent {
  @Input() user!: string;

  menuIsOpen: boolean = false;

  openClose(): void {
    this.menuIsOpen = !this.menuIsOpen;
    console.log(this.menuIsOpen);
  }
}
