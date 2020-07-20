import { Injectable, EventEmitter } from '@angular/core';


import { Observable } from 'rxjs';


@Injectable()
export class AuthService {


    public authenticate: boolean = false;
    public showMenu = new EventEmitter<boolean>();


    constructor(
    ) { }

    public postAuthenticate(): Observable<boolean> {

        return;

    }
}
