import { AuthService } from './auth.service';
import { StorageService } from './../storage/storage.service';
import { Login } from './models/login.model';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { NotificationProvider } from '../notification/notification.provider';
import { MailProvider } from './../abstract/mail.provider';
import { User } from './models/user.model';


@Injectable()
export class AuthProvider {

    public authenticated: EventEmitter<boolean> = new EventEmitter<boolean>();
    public user: EventEmitter<User> = new EventEmitter<User>();

    public isAuthenticated: boolean = false;

    constructor(
        private readonly mailProvider: MailProvider,
        private readonly notifyProvider: NotificationProvider,
        private readonly storageService: StorageService,
        private readonly router: Router,
        private readonly authService: AuthService
    ) { }

    public async authenticate(credentials: Login) {
        try {
            if (await this.isValid(credentials)) {
                this.setRemember(credentials);
                this.setAuthenticated(true);
                this.router.navigate(['main']);
            }
        } catch (err) {
            this.setAuthenticated(false);
            this.notifyProvider.warn('Atenção', err.message);
        }

    }

    public authenticatWithRemember() {
        const remember_login: Login = this.storageService.select('remember_login');
        if (remember_login) {
            this.authenticate(remember_login);
        }
    }

    public async isValid(credentials: Login) {

        this.mailProvider.isValid(credentials.email);

        if (!credentials.password) {
            throw new Error('Informe a Senha!');
        }

        const user: any = <User>await this.findUserByEmail(credentials.email);

        if (!user) {
            throw new Error('Usuário não encontrado!');
        }

        if (user.message) {
            throw new Error('Falha no serviço - Não foi possivel autenticar o usuário entre em contato com o administrador do sistema');
        }

        if (credentials.password !== user.login.password) {
            throw new Error('Senha Inválida!');
        }

        this.user.emit(user);

        return true;
    }

    public logoff() {
        try {
            this.setAuthenticated(false);
            this.removeRemember();
            this.router.navigate(['login']);
        } catch (err) {
            this.notifyProvider.danger('Ocorreu um erro', err.message);
        }
    }

    private setAuthenticated(authenticated: boolean) {
        this.isAuthenticated = authenticated;
        this.authenticated.emit(authenticated);
    }

    private setRemember(login: Login) {
        if (login.remember) {
            this.storageService.insert('remember_login', login);
        }
    }

    private removeRemember() {
        this.storageService.delete('remember_login');
    }

    public findUserByEmail(email: string): Promise<User | boolean | any> {
        return new Promise(resolve => {
            this.authService.getByEmail(email).subscribe((user: User) => {

                if (user) {
                    resolve(user);
                }

                resolve(false);
            }, err => {
                resolve(err);
            });
        });
    }

}
