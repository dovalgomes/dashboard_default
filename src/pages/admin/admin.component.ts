
import { Component, OnInit } from '@angular/core';

import { AppProvider } from './../../services/application/app.provider';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private readonly appProvider: AppProvider
  ) {
    this.appProvider.startLoading();
    setTimeout(() => {
      this.appProvider.stopLoading();
    }, 1500);
  }

  ngOnInit(): void {

  }

}
