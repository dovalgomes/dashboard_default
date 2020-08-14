export class Address {

    public zipCode: string;
    public uf: string;
    public city: string;

    public neighborhood: string;
    public address: string;
    public number: string;

    constructor() {
        this.uf = '';
        this.city = '';
        this.neighborhood = '';
        this.address = '';
        this.number = '';
        this.zipCode = '';
    }

    public create(uf: string, city: string, neighborhood: string, address: string, number: string, zipcode: string) {
        this.uf = uf;
        this.city = city;
        this.neighborhood = neighborhood;
        this.address = address;
        this.number = number;
        this.zipCode = zipcode;
    }

    public getAddressFormatted(): string {
        return this.address + ', ' + this.number + ' - ' + this.neighborhood + ', ' + this.city + ' - ' + this.uf + ', ' + this.zipCode;
    }
}
