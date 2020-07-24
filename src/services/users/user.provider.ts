import { User } from './models/user.model';

import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

    constructor(
        private readonly userService: UserService
    ) {

    }

    public list(): Promise<User[] | boolean | any> {
        return new Promise(resolve => {
            this.userService.get().subscribe((users: User[]) => {

                if (users) {
                    resolve(users);
                }

                resolve(false);
            }, err => {
                resolve(err);
            });
        });
    }

    public findUserByEmail(email: string): Promise<User | boolean | any> {
        return new Promise(resolve => {
            this.userService.getByEmail(email).subscribe((user: User) => {

                if (user) {
                    resolve(user);
                }

                resolve(false);
            }, err => {
                resolve(err);
            });
        });
    }
}
