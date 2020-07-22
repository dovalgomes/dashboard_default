import { Login } from './models/login.model';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { NotificationProvider } from '../notification/notification.provider';
import { MailProvider } from './../abstract/mail.provider';


@Injectable()
export class AuthProvider {

    public authenticated: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private readonly mailProvider: MailProvider,
        private readonly notifyProvider: NotificationProvider,
        private readonly router: Router
    ) { }

    public authenticate(credentials: Login) {

        try {
            if (this.isValid(credentials)) {
                this.setAuthenticated(true);
                this.router.navigate(['main']);
            }
        } catch (err) {
            this.setAuthenticated(false);
            this.notifyProvider.warn('Atenção', err.message);
        }

    }

    public isValid(credentials: Login) {

        this.mailProvider.isValid(credentials.email);

        if (!credentials.password) {
            throw new Error('Informe a Senha!');
        }

        return true;
    }

    public logoff() {
        try {
            this.setAuthenticated(false);
            this.router.navigate(['login']);
        } catch (err) {
            this.notifyProvider.danger('Ocorreu um erro', err.message);
        }
    }

    private setAuthenticated(authenticated: boolean) {
        this.authenticated.emit(authenticated);
    }

}
