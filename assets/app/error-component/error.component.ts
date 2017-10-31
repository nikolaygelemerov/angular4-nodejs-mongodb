import { Component, OnInit } from "@angular/core";

import { ErrorService } from "./services/error.service";
import { ErrorModel } from "./configs/error.model";

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {
    public error: ErrorModel;
    public display: string = 'none';

    constructor(private errorService: ErrorService) {}

    public ngOnInit(): void {
        this.errorService.errorOccurred
            .subscribe(
                (error: ErrorModel) => {
                    this.error = error;
                    this.display = 'block';
                }
            )
    }

    public onErrorHandled(): void {
        this.display = 'none';
    }
}