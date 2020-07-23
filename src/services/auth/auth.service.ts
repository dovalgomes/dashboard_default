import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './models/user.model';
// import { Login } from './models/login.model';

import { retry, timeout, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

    private readonly service: string = 'http://localhost:3000';

    constructor(
        private http: HttpClient
    ) { }

    public getByEmail(email: string): Observable<any> {

        const method: string = 'users?email=' + email;
        const url = this.service + '/' + method;

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('ContentType', 'application/json');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('charset', 'UTF-8');
        headers = headers.set('X-Proxy-URL', url);

        let user: User;

        return this.http.get(url, { headers, observe: 'response', responseType: 'json' }).pipe(
            map((res: any) => {
                const body = res.body;

                if (Array.isArray(body) && body.length > 0) {
                    user = this.fillUser(body[0]);
                }

                return user;
            })
        );
    }

    private fillUser(element: any): User {
        const user: User = new User();

        user.id = element.id;
        user.name = element.name;
        user.login = { email: element.email, password: element.password };
        user.admin = element.admin;

        return user;
    }

}
