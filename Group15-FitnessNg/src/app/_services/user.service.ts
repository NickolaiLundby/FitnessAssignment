import { Injectable } from '@angular/core';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor() { }

    getAll() {
        // return all users
    }

    register(user: User) {
        // register user
    }

    delete(id: number) {
        // delete user
    }
}