import { Injectable } from '@angular/core';


export class User {
  constructor(
    public name: string,
    public mobile: number,
    public email: string,
    public password: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    { name: 'vishnu', mobile : 9415826171, email: 'vish@gmail.com', password: 'vishnu' },
    { name: 'vishnu', mobile : 9415826171, email: 'vish@gmail.com', password: 'vishnu' },
    { name: 'vishnu', mobile : 9415826171, email: 'vish@gmail.com', password: 'vishnu' },
    { name: 'vishnu', mobile : 9415826171, email: 'vish@gmail.com', password: 'vishnu' },
  ];


  constructor() {  }
}
