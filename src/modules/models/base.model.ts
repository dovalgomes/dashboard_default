export abstract class BaseModel {

    public id: string;

    public created_by: string;
    public date_creation: Date;
    public modified_by?: string;
    public date_modify?: Date;
    public deleted_by?: string;
    public date_deleted?: Date;
    public deleted: boolean;

    constructor() {
        this.id = "";
        this.date_creation = new Date();
        this.deleted = false;
    }

}