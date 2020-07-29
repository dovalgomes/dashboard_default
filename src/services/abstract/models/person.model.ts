import { Business } from './business.model';
import { Contact } from './contact.model';
import { Address } from './address.model';

export class Person {

    public firstName: string;
    public lastName: string;

    public contact: Contact;
    public address: Address;
    public business: Business;


    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.contact = new Contact();
        this.address = new Address();
        this.business = new Business();
    }

    public create(firstName: string, lastName: string, contact: Contact, address: Address, business: Business) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
        this.address = address;
        this.business = business;
    }


    public getFullName(): string {
        return (this.firstName + ' ' + this.lastName);
    }

    public getInitials(): string {
        return (this.firstName.substring(0, 1) + this.lastName.substring(0, 1)).toUpperCase();
    }
}
