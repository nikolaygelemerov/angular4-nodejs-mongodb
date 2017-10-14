import {Component, OnInit} from "@angular/core";

import {Message} from "../../configs/message.model";
import {MessageService} from "../../services/message.service";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html'
})

export class MessageListComponent implements OnInit {

    public messages: Message[] = [];

    constructor(private messageService: MessageService) {}

    public ngOnInit() {
        this.messages = this.messageService.getMessages();
    }

    public handleEdit(value) {
        this.messages.forEach(element => {
            element.content = value;
        });
    }

}