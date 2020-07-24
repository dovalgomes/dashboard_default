import { User } from '../../services/users/models/user.model';
import { Router } from '@angular/router';

import { Component, OnInit, Input } from '@angular/core';

import { AuthProvider } from './../../services/auth/auth.provider';


@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {

  @Input() user: User;


  constructor(
    private readonly authProvider: AuthProvider
  ) { }

  ngOnInit() {

  }

  logout() {
    this.authProvider.logoff();
  }


}

