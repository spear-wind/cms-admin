import { Component, OnInit } from '@angular/core';
import { SignUp } from '../_models/sign-up';


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor() { }

    ngOnInit() {

    }

    register() {
        this.loading = true;
        if(this.model.email == 'nick@imaginationdynamic.com') {
            this.loading = false;
            this.error = 'test error, cant use this email';
        } else {
            this.loading = false;
            this.error = 'user account created';
        }
    }
}
