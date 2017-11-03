import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import {AuthService} from "../../../shared";
import { User } from "../../configs/user.model";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html'
})

export class SignUpComponent implements OnInit {
    public myForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router
        ) {}

    public ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null,
                [
                    Validators.required,
                    Validators.pattern(/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/)
                ]),
            password: new FormControl(null, Validators.required)
        });
    }

    public onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );

        this.authService.signup(user)
            .subscribe(
                data => {
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );

        this.myForm.reset();
    }
}