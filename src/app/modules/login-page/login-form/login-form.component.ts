import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/modules/core/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  mail = '';
  password = '';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  async onLogin() {
    try {
      await this.auth.login({ login: this.mail, password: this.password });
      this.router.navigate(['courses']);
    } catch (error) {
      console.log(error);
    }
  }

  get areDataValid(): boolean {
    return !!this.mail && !!this.password;
  }
}
