export class Contact {

    public phone: string;

    constructor() {
        this.phone = '';
    }

    public create(phone: string) {
        this.phone = phone;
    }
}
