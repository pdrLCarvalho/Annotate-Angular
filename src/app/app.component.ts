import { Component } from '@angular/core';
import { DataBaseService } from './services/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public databaseservice: DataBaseService) {}
  
  title = 'Annotate';
  username: string = 'odairmichael'
  items = {
    title: 'Celular',
    price: 129.80,
    description: 'Celular bonito'
  }
}
