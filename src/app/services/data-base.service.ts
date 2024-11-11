import { Injectable } from '@angular/core';
import { User } from '../models/userInfos';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  dataBase: Array<Object> = []

  currentPage : string = 'LOGIN';

  constructor() {
    this.subscribing()
  }

  users: User[] = [
    { id: 1, name: 'Pedro', email: 'pedro@teste.com', password: 'senha123',
      tasks: [{
        importante: ["Finalizar projeto"],
        trabalho: ["Reunião com cliente"],
        estudos: ["Estudar TypeScript"],
        lazer: ["Assistir série"],
        compras: ["Comprar café", "Leite"]
      }]
     },
    { id: 2, name: 'Odair', email: 'odair@teste.com', password: 'senha123' },
    // { id: 1, name: 'Pedro', email: 'pedro@teste.com', password: 'senha123' },
    // { id: 2, name: 'Odair', email: 'odair@teste.com', password: 'senha123' },
  ]

  userLogged: User | null = null; // Usuário logado atualmente

  subscribing(): void {
    this.dataBase.push(this.users)
  }
}
