import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit {
    public myForm: FormGroup;

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

}