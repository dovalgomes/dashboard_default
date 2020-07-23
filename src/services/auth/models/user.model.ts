import { Login } from './login.model';

export class User {

    public id: number;
    public name: string;
    public login: Login;
    public admin: boolean;

    constructor() {
        this.id = 0;
        this.name = '';
        this.login = new Login();
        this.admin = false;
    }
}
