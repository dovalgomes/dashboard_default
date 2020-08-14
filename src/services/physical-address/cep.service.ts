import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Address } from '../abstract/models/address.model';

@Injectable()
export class CepService {

    private readonly service: string = 'https://viacep.com.br/ws/';
    private readonly format: string = 'json';

    constructor(private http: HttpClient) { }

    public getByPostalCode(postalCode: string): Observable<Address | boolean> {

        postalCode = postalCode.replace('-', '');

        const url: string = this.service + postalCode + '/' + this.format;

        return this.http.get(url, { observe: 'response', responseType: 'json' }).pipe(
            map((res: any) => {

                const body = res.body;

                if (body) {
                    const address = new Address();
                    address.create(body.uf, body.localidade, body.bairro, body.logradouro, '', body.cep);
                    return address;
                }

                return false;
            })
        );

    }
}
