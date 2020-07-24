import { AuthService } from './auth.service';
import { StorageService } from './../storage/storage.service';
import { Login } from './models/login.model';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { UserService } from './../users/user.service';




import { MailProvider } from './../abstract/mail.provider';
import { User } from '../users/models/user.model';

import { AppProvider } from '../application/app.provider';
import { UserProvider } from '../users/user.provider';


@Injectable()
export class AuthProvider {

    public authEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();
    public userEmmiter: EventEmitter<User> = new EventEmitter<User>();

    public userAuthenticated: User = new User();
    public isAuthenticated: boolean = false;

    constructor(
        private readonly mailProvider: MailProvider,
        private readonly appProvider: AppProvider,
        private readonly storageService: StorageService,
        private readonly router: Router,
        private readonly userProvider: UserProvider
        // private readonly authService: AuthService
    ) { }

    public async authenticate(credentials: Login) {
        try {

            this.validateLogin(credentials);
            const user: any = <User>await this.userProvider.findUserByEmail(credentials.email);

            if (!user) {
                throw new Error('Usuário não encontrado!');
            }

            if (user.message) {
                throw new Error('Falha no serviço - Não foi possivel autenticar o usuário entre em contato com o administrador do sistema');
            }
            
            this.checkCredentials(credentials, user);
            this.userAuthenticated = user;
            this.userEmmiter.emit(user);
            this.setRemember(credentials);
            this.setAuthenticated(true);
            this.router.navigate(['main']);

        } catch (err) {
            this.setAuthenticated(false);
            this.appProvider.showMessage('warn', 'Atenção', err.message);
        }

    }

    public authenticatWithRemember() {
        const remember_login: Login = this.storageService.select('remember_login');
        if (remember_login) {
            this.authenticate(remember_login);
        }
    }

    public validateLogin(credentials: Login) {
        this.mailProvider.isValid(credentials.email);

        if (!credentials.password) {
            throw new Error('Informe a Senha!');
        }
    }

    public checkCredentials(credentials: Login, user: User) {
        if (credentials.password !== user.login.password) {
            throw new Error('Senha Inválida!');
        }
    }

    public logoff() {
        try {
            this.setAuthenticated(false);
            this.removeRemember();
            this.router.navigate(['login']);
        } catch (err) {
            this.appProvider.showMessage('danger', 'Ocorreu um erro', err.message);
        }
    }

    private setAuthenticated(authenticated: boolean) {
        this.isAuthenticated = authenticated;
        this.authEmmiter.emit(authenticated);
    }

    private setRemember(login: Login) {
        if (login.remember) {
            this.storageService.insert('remember_login', login);
        }
    }

    private removeRemember() {
        this.storageService.delete('remember_login');
    }

}
