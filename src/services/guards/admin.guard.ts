import { AuthProvider } from '../auth/auth.provider';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private readonly authProvider: AuthProvider,
        private readonly router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.authProvider.isAuthenticated) {
            if (this.authProvider.userAuthenticated.login.admin) {
                return true;
            } else {
                this.router.navigate(['main']);
                return true;
            }
        }
        this.router.navigate(['login']);
        return false;
    }

}
