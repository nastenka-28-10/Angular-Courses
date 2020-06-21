import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/modules/core/auth-service/auth.service';
import { Router } from '@angular/router';
import { AuthData } from 'app/interfaces/user-interface';
import { LoadingSpinnerServiceService } from 'app/modules/core/loading-spinner-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: any = {};
  failedAuthorizationMessage = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private loadingSpinnerService: LoadingSpinnerServiceService,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit() {}

  onLogin() {
    this.failedAuthorizationMessage = '';
    this.auth
      .login({ login: this.loginForm.value.email, password: this.loginForm.value.password })
      .subscribe(
        (res: AuthData) => {
          this.loadingSpinnerService.display(false);
          localStorage.setItem('accessToken', res.token);
          this.router.navigate(['courses']);
        },
        (error: HttpErrorResponse) => {
          this.loadingSpinnerService.display(false);
          this.failedAuthorizationMessage = 'Wrong e-mail or password';
        },
      );
  }
}
