import { Login } from './../../services/auth/models/login.model';
import { AuthProvider } from './../../services/auth/auth.provider';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  public login: Login = new Login();

  constructor(
    private readonly authProvider: AuthProvider
  ) { }


  authenticate() {
    this.authProvider.authenticate(this.login);
  }

  ngOnInit() {

  }
}
