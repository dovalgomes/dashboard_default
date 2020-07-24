import { Person } from '../../abstract/models/person.model';
import { BaseModel } from '../../abstract/models/base.model';

import { Login } from '../../auth/models/login.model';


export class User extends BaseModel {

    public person: Person;
    public login: Login;

    constructor() {
        super();

        this.person = new Person();
        this.login = new Login();
    }
}
