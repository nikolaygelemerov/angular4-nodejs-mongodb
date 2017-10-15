import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html'
})

export class SignUpComponent implements OnInit {
    public myForm: FormGroup;

    public ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/')
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    public onSubmit() {
        console.log('myForm: ', this.myForm);
    }
}