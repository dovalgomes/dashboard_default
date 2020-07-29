import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {


    private localstorage = localStorage;

    constructor() { }

    insert(key: string, value: any) {
        this.localstorage.setItem(key, JSON.stringify(value));
    }

    delete(key: string) {
        this.localstorage.removeItem(key);
    }

    select(key: string, filter?: any) {
        if (!filter) {
            return JSON.parse(this.localstorage.getItem(key));
        } else {
            throw new Error('Função não implementada');
        }
    }

    update(key: string, value: any) {
        this.delete(key);
        this.insert(key, value);
    }

}
