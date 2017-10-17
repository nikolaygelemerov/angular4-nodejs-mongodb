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

    public ngOnInit(): void {
        this.messageService.getMessages()
            .subscribe((messages: Message[]) => {
                    this.messages = messages;
                });
    }

    public handleEdit(value): void {
        this.messages.forEach(element => {
            element.content = value;
        });
    }

}