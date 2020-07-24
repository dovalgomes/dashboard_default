export class Login {

    public email: string;
    public password: string;
    public admin: boolean;
    public remember?: boolean;

    constructor() {
        this.email = '';
        this.password = '';
        this.admin = false;
        this.remember = false;
    }

    public create(email: string, password: string, admin: boolean, remember?: boolean) {
        this.email = email;
        this.password = password;
        this.admin = admin;
        this.remember = remember;
    }
}
