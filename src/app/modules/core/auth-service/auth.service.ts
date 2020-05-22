import { Injectable } from '@angular/core';
import { AuthData, UserInfo, UserInterface } from 'app/interfaces/user-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private BASE_URL = `http://localhost:3004`;

  login(user: UserInterface): Promise<boolean> {
    return this.http
      .post<AuthData>(`${this.BASE_URL}/auth/login`, user)
      .toPromise()
      .then((res: AuthData) => {
        localStorage.setItem('accessToken', res.token);
        return true;
      });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
    return false;
  }

  getUserInfo(): Promise<UserInfo> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http
      .post<UserInfo>(`${this.BASE_URL}/auth/userinfo`, { token: accessToken })
      .toPromise();
  }
}
