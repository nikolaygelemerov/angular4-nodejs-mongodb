import { Component, OnInit } from "@angular/core";
import {NgForm} from "@angular/forms";

import {MessageService} from "../../services/message.service";
import {Message} from "../../configs/message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit {
    public message: Message;

    constructor(private messageService: MessageService) {}

    public ngOnInit(): void {
        this.messageService.messageIsEdit.subscribe(
            message => this.message = message
        );
    }

    public onSubmit(form: NgForm): void {
        if (this.message) {
            this.message.content = form.value.content;

            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );

            this.message = null;
        } else {
            const message = new Message(form.value.content, 'Nikolay');

            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error((error))
                );
        }

        form.resetForm();
    }

    public onClear(form: NgForm): void {
        //this.message = null;
        form.resetForm();
    }

}