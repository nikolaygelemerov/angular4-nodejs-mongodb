import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

import {MessageService} from "../../services/message.service";
import {Message} from "../../configs/message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {

    constructor(private messageService: MessageService) {}

    public onSubmit(form: NgForm): void {
        const message = new Message(form.value.content, 'Nikolay');

        this.messageService.addMessage(message);
        form.resetForm();
    }

}