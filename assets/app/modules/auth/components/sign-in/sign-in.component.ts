import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../../configs/user.model";
import { AuthService } from "../../../shared";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit {
    public myForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.myForm = new FormGroup({
            email: new FormControl(null,
                [
                    Validators.required,
                    Validators.pattern(/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/)
                ]),
            password: new FormControl(null, Validators.required)
        });
    }

    public onSubmit(): void {
        const user = new User(this.myForm.value.email, this.myForm.value.password);

        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);

                    this.router.navigateByUrl('/messages');
                },
                error => console.error((error))
            );

        this.myForm.reset();
    }

}