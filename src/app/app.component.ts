import { User } from './../services/auth/models/user.model';


import { Component, OnInit } from '@angular/core';
import { AuthProvider } from './../services/auth/auth.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  public title: string = '';
  public showMenu: boolean = false;

  public user: User;

  public options = {};

  constructor(
    private authProvider: AuthProvider,
  ) {

  }

  ngOnInit(): void {

    this.authProvider.authenticated.subscribe((authenticated: boolean) => {
      this.showMenu = authenticated;
    });

    this.authProvider.user.subscribe((user: User) => {
      this.user = user;
    });

    this.authProvider.authenticatWithRemember();



  }
}
