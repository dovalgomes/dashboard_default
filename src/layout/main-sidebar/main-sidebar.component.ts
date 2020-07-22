import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {

  protected user: any = { name: '' };


  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {

  }

  logout() {
    this.router.navigate(['login']);
  }


}

