
import { Injectable } from "@angular/core";
import { CepService } from './cep.service';

import { Address } from './../abstract/models/address.model';


@Injectable()
export class PhysicalAddressProvider {

    constructor(
        private readonly cepService: CepService
    ) { }

    public getAddressByPostalCode(postalCode: string): Promise<Address | boolean> {
        return new Promise(resolve => {

            this.cepService.getByPostalCode(postalCode).subscribe((address: Address) => {
                console.log(address);
                if (address) {
                    resolve(address);
                }

                resolve(false);
            }, (err) => {
                console.log(err);
                resolve(false);
            });

        });
    }
}
