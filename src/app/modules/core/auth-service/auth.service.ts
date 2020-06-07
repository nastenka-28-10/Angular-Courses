import { Injectable } from '@angular/core';
import { AuthData, UserInfo, UserInterface } from 'app/interfaces/user-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoadingSpinnerServiceService} from 'app/modules/core/loading-spinner-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private loadingSpinnerService: LoadingSpinnerServiceService) {}

  private BASE_URL = `http://localhost:3004`;

  login(user: UserInterface): Observable<AuthData> {
    this.loadingSpinnerService.display(true);
    return this.http.post<AuthData>(`${this.BASE_URL}/auth/login`, user);
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

  getUserInfo(): Observable<UserInfo> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<UserInfo>(`${this.BASE_URL}/auth/userinfo`, { token: accessToken });
  }
}
