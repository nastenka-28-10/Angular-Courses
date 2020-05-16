import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { User } from 'app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: User): void {
    const token = uuid.v4();
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('accessToken', token);
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
    return false;
  }

  getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
}
