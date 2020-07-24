import { Business } from './../abstract/models/business.model';
import { Contact } from './../abstract/models/contact.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../users/models/user.model';
// import { Login } from './models/login.model';

import { retry, timeout, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Person } from '../abstract/models/person.model';
import { Address } from '../abstract/models/address.model';
import { Login } from './models/login.model';


@Injectable()
export class AuthService {

    private readonly service: string = 'http://localhost:3000';

    constructor(
        private http: HttpClient
    ) { }

}
