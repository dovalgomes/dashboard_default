
import { Injectable } from '@angular/core';

import { LoginModel } from './models/login.model';



@Injectable()
export class AuthProvider {

  constructor(

  ) {
  }

  public authenticate(login: LoginModel): Promise<boolean> {

    try {

      return;

    } catch (err) {

    }


  }

  public isAuthenticated() {

  }

  public logoff() {

  }

  private validate(login: LoginModel): boolean {
    if (!login.mail) {
      throw { message: 'Preencha o E-mail para Autenticar-se', control: true };
    } else if (!login.password) {
      throw { message: 'Preencha a sua senha para Autenticar-se', control: true }
    }
    return true;
  }

}
