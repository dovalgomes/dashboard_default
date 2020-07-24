import { AuthProvider } from '../auth/auth.provider';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly authProvider: AuthProvider,
        private readonly router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.authProvider.isAuthenticated) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }

}
