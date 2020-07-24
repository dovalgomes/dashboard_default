import { NotificationProvider } from './../services/notification/notification.provider';
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
  public user: User = new User();

  public showLoading: boolean;

  public options = {};

  constructor(
    private authProvider: AuthProvider,
    private notificationProvider: NotificationProvider
  ) {

    this.notificationProvider.loadingEmitter.subscribe((show: boolean) => {
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
