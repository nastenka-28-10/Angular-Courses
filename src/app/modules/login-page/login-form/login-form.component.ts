import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/modules/core/auth-service/auth.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  mail = '';
  password = '';

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  onLogin() {
    this.auth.login({ id: uuid.v4(), mail: this.mail, password: this.password });
    console.log('logged in successfully');
  }

  get areDataValid(): boolean {
    return !!this.mail && !!this.password;
  }
}
