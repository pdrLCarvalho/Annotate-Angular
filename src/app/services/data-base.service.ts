import { Injectable } from '@angular/core';
import { User } from '../models/userInfos';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  dataBase: Array<Object> = []

  constructor() {
    this.subscribing()
  }

  users: User[] = [
    { id: 1, name: 'Pedro', email: 'pedro@teste.com', password: 'senha123' },
    { id: 2, name: 'Odair', email: 'odair@teste.com', password: 'senha123' },
  ]

  userLogged: User | null = null; // Usuário logado atualmente

  subscribing(): void {
    this.dataBase.push(this.users)
  }
}
