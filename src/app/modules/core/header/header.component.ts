import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/modules/core/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogOff(): void {
    this.authService.logout();
    console.log('logout');
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
