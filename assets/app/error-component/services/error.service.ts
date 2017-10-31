import { EventEmitter } from "@angular/core";

import { ErrorModel } from "../configs/error.model";

export class ErrorService {
    public errorOccurred = new EventEmitter<ErrorModel>();

    public handleError(error: any) {
        const errorData = new ErrorModel(error.title, error.error.message);

        this.errorOccurred.emit(errorData);
    }
}