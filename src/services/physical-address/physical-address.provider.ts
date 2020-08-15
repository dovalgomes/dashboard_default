
import { Injectable } from '@angular/core';
import { CepService } from './cep.service';

import { Address } from './../abstract/models/address.model';
import { AppProvider } from '../application/app.provider';


@Injectable()
export class PhysicalAddressProvider {

    constructor(
        private readonly cepService: CepService,
        private readonly appProvider: AppProvider
    ) { }

    public getAddressByPostalCode(postalCode: string): Promise<Address | boolean> {
        return new Promise(resolve => {

            if (!postalCode) {
                throw new Error('Informe o CEP');
            }

            this.cepService.getByPostalCode(postalCode).subscribe((address: Address) => {
                if (address) {
                    resolve(address);
                }

                resolve(false);
            }, (err) => {
                this.appProvider.showMessage('danger', 'Erro ao realizar operação', err.message);
                resolve(false);
            });

        });
    }
}
