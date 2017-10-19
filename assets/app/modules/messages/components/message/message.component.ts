import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

import { Message } from "../../configs/message.model";
import {MessageService} from "../../services/message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
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
}