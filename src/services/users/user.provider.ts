import { User } from './models/user.model';

import { UserService } from './user.service';
import { Injectable } from '@angular/core';

import { DataPaginate } from '../abstract/application/data.paginate.model';
import { AppProvider } from '../application/app.provider';

@Injectable()
export class UserProvider {

    constructor(
        private readonly userService: UserService,
        private readonly appProvider: AppProvider,
    ) {

    }

    public list(): Promise<User[] | boolean | any> {
        return new Promise(resolve => {
            this.userService.get().subscribe((users: User[]) => {

                if (users) {
                    resolve(users);
                }

                resolve(false);
            }, err => {
                resolve(err);
            });
        });
    }

    public listWithPaginate(): Promise<DataPaginate> {
        return new Promise(async resolve => {
            const users = await this.list();

            const paginate = new DataPaginate();
            paginate.create(users, 6);

            resolve(paginate);
        });
    }

    public findUserByEmail(email: string): Promise<User | boolean | any> {
        return new Promise(resolve => {
            this.userService.getByEmail(email).subscribe((user: User) => {

                if (user) {
                    resolve(user);
                }

                resolve(false);
            }, err => {
                resolve(err);
            });
        });
    }

    public disable(_user: User): void {
        _user.active = false;
        this.userService.put(_user.id, _user).subscribe((user: User) => {
            if (user) {
                this.appProvider.showMessage('success', 'Operação concluída', `Usuário ${user.person.getFullName()}, bloqueado com sucesso`);
            }
        }, err => {
            this.appProvider.showMessage('danger', 'Erro ao realizar operação', err.message);
        });
    }
    public enable(_user: User): void {
        _user.active = true;
        this.userService.put(_user.id, _user).subscribe((user: User) => {
            if (user) {
                this.appProvider.showMessage('success', 'Operação concluída!', `Usuário ${user.person.getFullName()}, ativado com sucesso`);
            }
        }, err => {
            this.appProvider.showMessage('danger', 'Erro ao realizar operação', err.message);
        });
    }

}
