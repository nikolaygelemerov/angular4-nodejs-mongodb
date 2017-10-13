import {Component} from "@angular/core";

import {MessageService} from "../../services/message.service";
import {Message} from "../../message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {

    constructor(private messageService: MessageService) {}

    public onSave(value: string) {
        const message = new Message(value, 'Nikolay');

        this.messageService.addMessage(message);
    }

}