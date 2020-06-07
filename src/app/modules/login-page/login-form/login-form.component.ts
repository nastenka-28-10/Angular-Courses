import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/modules/core/auth-service/auth.service';
import { Router } from '@angular/router';
import { AuthData } from 'app/interfaces/user-interface';
import {LoadingSpinnerServiceService} from 'app/modules/core/loading-spinner-service.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  mail = '';
  password = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private loadingSpinnerService: LoadingSpinnerServiceService
  ) {}

  ngOnInit() {}

  onLogin() {
    this.auth.login({ login: this.mail, password: this.password }).subscribe((res: AuthData) => {
      this.loadingSpinnerService.display(false);
      localStorage.setItem('accessToken', res.token);
      this.router.navigate(['courses']);
    }, (error: HttpErrorResponse) => console.log(error));
  }

  get areDataValid(): boolean {
    return !!this.mail && !!this.password;
  }
}
