import { User } from './../services/auth/models/user.model';

import { AppProvider } from './../services/application/app.provider';

import { Component, OnInit } from '@angular/core';
import { AuthProvider } from './../services/auth/auth.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  public page: any = { title: '', };

  public showMenu: boolean = false;
  public showLoading: boolean = false;

  public user: User = new User();

  public options = {};

  constructor(
    private authProvider: AuthProvider,
    private appProvider: AppProvider
  ) {

    this.appProvider.loadingEmitter.subscribe((show: boolean) => {
      this.showLoading = show;
    });

    this.authProvider.authEmmiter.subscribe((authenticated: boolean) => {
      this.showMenu = authenticated;
    });

    this.authProvider.userEmmiter.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.authProvider.authenticatWithRemember();
  }
}
