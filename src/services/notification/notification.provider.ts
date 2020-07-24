import { Injectable, EventEmitter } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class NotificationProvider {

    private options: any = { showProgressBar: true, pauseOnHover: true, clickToClose: true, timeout: 3500 };

    public loadingEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();



    constructor(
        private readonly notification: NotificationsService
    ) {

    }

    public startLoading() {
        this.loadingEmitter.emit(true);
    }
    public stopLoading() {
        this.loadingEmitter.emit(false);
    }

    public success(title: string, message: string) {
        this.notification.success(title, message, this.options);
    }

    public warn(title: string, message: string) {
        this.notification.warn(title, message, this.options);
    }

    public danger(title: string, message: string) {
        this.notification.error(title, message, this.options);
    }

    public info(title: string, message: string) {
        this.notification.info(title, message, this.options);
    }
}
