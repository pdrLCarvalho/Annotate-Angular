import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() name: string = '';
  @Input() items!: { title: string, price: number, description: string };
  nome: string = 'Odair Michael Bendotti';
  email: string = 'odair.michael@hotmail.com';

  expandedMenu: boolean = true;
  isLoggedIn: boolean = false;
  screenWidth: number = window.innerWidth;
  checkResponsive: boolean = false;

  menuItems = [
    { icon: 'fa-regular fa-calendar', text: 'Meu dia', mark: 'normal', count: 5 },
    { icon: 'fa-solid fa-circle-exclamation', text: 'Importante', mark: 'important', count: 3 },
    { icon: 'fa-regular fa-clock', text: 'Planejado', mark: 'medium', count: 4 },
    { icon: 'fa-solid fa-list-check', text: 'Tarefas', mark: 'normal', count: 1 },
    { icon: 'fa-solid fa-store', text: 'Lista de compras', mark: 'important', count: 3 },
    { icon: 'fa-regular fa-handshake', text: 'Reuniões', mark: 'important', count: 3 }
  ];

  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }

  changeMenuSize(): void {
    this.expandedMenu = !this.expandedMenu;
  }

  ngOnInit(): void {
    window.addEventListener('resize', this.updateScreenWidth);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateScreenWidth);
  }

  updateScreenWidth = () => {
    this.screenWidth = window.innerWidth;
    this.expandedMenu = true;
  }

  showResponsiveMenu(): void {
    this.checkResponsive = !this.checkResponsive;
  }
}
