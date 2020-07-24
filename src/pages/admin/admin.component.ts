import { NotificationProvider } from './../../services/notification/notification.provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private readonly notificationProvider: NotificationProvider
  ) {
    this.notificationProvider.startLoading();
    setTimeout(() => {
      this.notificationProvider.stopLoading();
    }, 1500);
  }

  ngOnInit(): void {

  }

}
