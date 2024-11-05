import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Annotate';
  username: string = 'odairmichael'
  items = {
    title: 'Celular',
    price: 129.80,
    description: 'Celular bonito'
  }
}
