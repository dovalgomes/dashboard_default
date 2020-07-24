export class Business {

    public role: string;
    public department: string;

    constructor() {
        this.role = '';
        this.department = '';
    }

    public create(role: string, department: string) {
        this.role = role;
        this.department = department;
    }
}
