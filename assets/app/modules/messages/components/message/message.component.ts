import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

import { Message } from "../../configs/message.model";
import {MessageService} from "../../services/message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`        
        .author {
            display: inline-block;
            width: 80%;
            font-style: italic;
            font-size: 12px;
        }

        .config {
            display: inline-block;
            width: 19%;
            text-align: right;
            font-size: 12px;
        }
        
        .config a {
            margin: 0 2px;
        }
    `]
})

export class MessageComponent implements OnInit {
    @Input('inputMessage') public message: Message;

    constructor(private messagesService: MessageService) {}

    public ngOnInit(): void { }

    public onEdit(): void {
        this.messagesService.editMessage(this.message);
    }

    public onDelete(): void {
        this.messagesService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    public belongsToUser(): boolean {
        return localStorage.getItem('userId') == this.message.userId;
    }
}