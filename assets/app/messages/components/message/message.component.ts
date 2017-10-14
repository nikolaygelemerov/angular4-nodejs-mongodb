import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

import { Message } from "../../configs/message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {
    @Input('inputMessage') message: Message;
    @Output() editClicked = new EventEmitter<string>();

    public ngOnInit() { }

    public onEdit() {
        this.editClicked.emit('A new value');
    }
}