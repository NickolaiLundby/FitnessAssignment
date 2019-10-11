import { Component, OnInit } from '@angular/core';

import { User } from '@/_models';
import { AuthenticationService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.currentUser = this.authenticationService.currentUser;
    }

    ngOnInit() {
        //
    }
}