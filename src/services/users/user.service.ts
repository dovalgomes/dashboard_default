
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { retry, timeout, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Person } from '../abstract/models/person.model';
import { Address } from '../abstract/models/address.model';
import { Business } from './../abstract/models/business.model';
import { Contact } from './../abstract/models/contact.model';
import { Login } from '../auth/models/login.model';
import { User } from '../users/models/user.model';



@Injectable()
export class UserService {

    private readonly service: string = 'http://localhost:3000';

    constructor(private readonly http: HttpClient) { }

    public get(): Observable<any> {
        const method: string = 'users';
        const url = this.service + '/' + method;

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('ContentType', 'application/json');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('charset', 'UTF-8');
        headers = headers.set('X-Proxy-URL', url);

        return this.http.get(url, { headers, observe: 'response', responseType: 'json' }).pipe(
            map((res: any) => {
                const body = res.body;
                const users = new Array<User>();

                if (Array.isArray(body) && body.length > 0) {
                    body.forEach(user => {
                        users.push(this.fillUser(user));
                    });
                } else {
                    return [];
                }

                return users;
            })
        );
    }

    public getByEmail(email: string): Observable<any> {

        const method: string = 'users?email=' + email;
        const url = this.service + '/' + method;

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('ContentType', 'application/json');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('charset', 'UTF-8');
        headers = headers.set('X-Proxy-URL', url);

        return this.http.get(url, { headers, observe: 'response', responseType: 'json' }).pipe(
            map((res: any) => {
                const body = res.body;

                if (Array.isArray(body) && body.length > 0) {
                    return this.fillUser(body[0]);
                }

                return false;
            })
        );
    }

    private fillUser(element: any): User {
        const user: User = new User();

        const person = new Person();
        const login = new Login();
        const contact = new Contact();
        const address = new Address();
        const business = new Business();

        console.log(element);

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
}
