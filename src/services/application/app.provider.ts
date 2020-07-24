import { Injectable, EventEmitter } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';
import { PageHeader } from '../abstract/models/page-header.model';

@Injectable()
export class AppProvider {

    private options: any = { showProgressBar: true, pauseOnHover: true, clickToClose: true, timeout: 3500 };

    public loadingEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    public headerPageEmiter: EventEmitter<PageHeader> = new EventEmitter<PageHeader>();

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

    public setHeaderPage(header: PageHeader) {
        this.headerPageEmiter.emit(header);
    }

    public showMessage(type: 'success' | 'warn' | 'danger' | 'info', title: string, message: string): void {
        switch (type) {
            case 'success':
                this.notification.success(title, message, this.options);
                break;
            case 'warn':
                this.notification.warn(title, message, this.options);
                break;
            case 'danger':
                this.notification.error(title, message, this.options);
                break;
            case 'info':
                this.notification.info(title, message, this.options);
                break;
            default:
                this.notification.info(title, message, this.options);
                break;
        }
    }
}
