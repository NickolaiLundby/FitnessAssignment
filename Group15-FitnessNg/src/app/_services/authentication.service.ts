import { Injectable } from '@angular/core';
import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor() {
        
    }

    public get currentUser(): User {
        // return false in case unauthenticated
        // return the current user in case authenticated
    }

    login(username, password) {
        // log the user in here
    }

    logout() {
        // log the user out here
    }
}