import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

import { Message } from "../../configs/message.model";
import {MessageService} from "../../services/message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {
    @Input('inputMessage') message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messagesService: MessageService) {}

    public ngOnInit(): void { }

    public onEdit(): void {
        this.editClicked.emit('A new value');
    }

    public onDelete(): void {
        console.log('this.message: ', this.message);
        this.messagesService.deleteMessage(this.message);
    }
}