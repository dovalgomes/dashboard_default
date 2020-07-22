import { Injectable } from '@angular/core';

@Injectable()
export class MailProvider {

    public isValid(mail: string): boolean {

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(String(mail).toLowerCase())) {
            throw new Error('Informe um E-mail válido');
        }

        return true;
    }
}
