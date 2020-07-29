export class DataPaginate {

    private data: any[];
    private currentPage: number;
    private limit: number;

    constructor() {
        this.data = [];
        this.limit = 0;
        this.currentPage = 1;
    }

    public getCurrentPage() {
        return this.currentPage;
    }

    public create(data: any, limit: number) {
        this.data = data;
        this.limit = limit;
        this.currentPage = 1;
    }

    public hasNext(): boolean {
        return this.currentPage >= 1 && this.currentPage < this.getTotalPage();
    }
    
    public hasPrevious(): boolean {
        return this.currentPage <= this.getTotalPage() && this.currentPage > 1;
    }

    public nextPage() {
        if (this.hasNext()) {
            this.currentPage++;
        }
    }

    public previousPage() {
        if (this.hasPrevious()) {
            this.currentPage--;
        }
    }

    public setPage(index: number) {
        this.currentPage = index;
    }

    public getDataWithLimit() {
        return this.data.slice(((this.currentPage - 1) === 0 ? 0 : ((this.currentPage - 1) * this.limit)), (this.limit * this.currentPage));
    }

    private getLength() {
        return this.data.length;
    }

    public getIndexPages() {
        const result = [];

        for (let i = 0; i < this.getTotalPage(); i++) {
            result.push(i + 1);
        }
        return result;
    }

    public getTotalPage() {
        return Math.ceil(this.getLength() / this.limit);
    }
}
