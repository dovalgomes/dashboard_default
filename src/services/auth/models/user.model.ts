import { Login } from './login.model';

export class User {

    public id: number;
    public firstName: string;
    public lastName: string;

    public login: Login;
    public admin: boolean;

    public avatar: string;

    public active: boolean;

    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.avatar = '';
        this.login = new Login();
        this.admin = false;
        this.active = false;
    }

    public getFullName(): string {
        return (this.firstName + ' ' + this.lastName);
    }

    public getInitials(): string {
        return (this.firstName.substring(0, 1) + this.lastName.substring(0, 1)).toUpperCase();
    }
}
