import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'app/modules/core/auth-service/auth.service';
import { UserInfo } from 'app/interfaces/user-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userInfo = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .getUserInfo()
      .pipe(map((userInfo: UserInfo) => `${userInfo.name.first} ${userInfo.name.last}`))
      .subscribe((value: string) => (this.userInfo = value));
  }

  onLogOff(): void {
    this.authService.logout();
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
