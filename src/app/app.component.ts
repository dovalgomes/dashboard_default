

import { Component, OnInit } from '@angular/core';
import { AuthProvider } from './../services/auth/auth.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  public title: string = '';
  public showMenu: boolean = false;

  public options = {};

  constructor(
    private authProvider: AuthProvider
  ) {

  }
  ngOnInit(): void {

    this.authProvider.authenticated.subscribe((authenticated: boolean) => {
      this.showMenu = authenticated;
    });

  }
}
