import { User } from './models/user.model';

import { UserService } from './user.service';
import { Injectable } from '@angular/core';

import { DataPaginate } from '../abstract/application/data.paginate.model';
import { AppProvider } from '../application/app.provider';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../abstract/models/person.model';
import { Login } from '../auth/models/login.model';
import { Contact } from '../abstract/models/contact.model';
import { Address } from '../abstract/models/address.model';
import { Business } from '../abstract/models/business.model';

@Injectable()
export class UserProvider {

    constructor(
        private readonly userService: UserService,
        private readonly appProvider: AppProvider,
        private readonly formBuilder: FormBuilder
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

    public getFormUserRules(user: User) {
        return this.formBuilder.group({
            id: [user.id],
            firstName: [user.person.firstName, Validators.required],
            lastName: [user.person.lastName, Validators.required],
            phone: [user.person.contact.phone, Validators.required],
            // department: [user.person.business.department, Validators.required],
            // role: [user.person.business.role, Validators.required],
            uf: [user.person.address.uf, Validators.required],
            city: [user.person.address.city, Validators.required],
            neighborhood: [user.person.address.neighborhood, Validators.required],
            address: [user.person.address.address, Validators.required],
            number: [user.person.address.number],
            zip_code: [user.person.address.zipCode, Validators.required],
            email: [user.login.email, Validators.required],
            password: [user.login.password, Validators.required],
            admin: [user.login.admin],
            active: [user.active],
        });
    }

    public getUserFormValues(form: FormGroup): User {
        const user = new User();

        const person = new Person();
        const login = new Login();
        const contact = new Contact();
        const address = new Address();
        const business = new Business();

        const element = form.value;

        address.create(element.uf, element.city, element.neighborhood, element.address, element.number, element.zip_code);
        contact.create(element.phone);
        business.create(element.role, element.department);
        person.create(element.firstName, element.lastName, contact, address, business);
        login.create(element.email, element.password, element.admin);

        user.id = element.id;
        user.active = element.active;
        user.person = person;
        user.login = login;

        return user;
    }

    public save(user: User): Promise<User | boolean> {
        return new Promise(resolve => {

            console.log(user);

            if (user.id === 0) {
                this.userService.post(user).subscribe((_user: User) => {
                    if (_user && _user.id) {
                        resolve(_user);
                    }

                    resolve(false);
                }, (err) => {
                    console.log(err);
                    this.appProvider.showMessage('warn', 'Atenção', err.message);
                });
            } else {
                this.userService.put(user.id, user).subscribe((_user: User) => {
                    if (_user) {
                        resolve(_user);
                    }

                    resolve(false);
                }, (err) => {
                    console.log(err);
                    this.appProvider.showMessage('warn', 'Atenção', err.message);
                });
            }
        });
    }

}
