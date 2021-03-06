export abstract class BaseModel extends Object {

    public id: number;
    public active: boolean;

    constructor() {
        super();

        this.id = 0;
        this.active = true;
    }

    public toString() {
        return JSON.stringify(this);
    }

}
