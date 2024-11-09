import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  dataBase : Array<Object> = []

  constructor() {
    this.subscribing()
  }

  Obj1 :Object = {
    name:'Pedro',
    email:'pedro@teste.com',
    password:'senha123'
  }

  subscribing():void{
    this.dataBase.push(this.Obj1)
  }
}
