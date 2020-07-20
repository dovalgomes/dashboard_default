export class LoginModel {
    public mail: string;
    public password: string;
    public remember: boolean;

    constructor() {

        this.mail = ''
        this.password = ''
        this.remember = false;
    }
}