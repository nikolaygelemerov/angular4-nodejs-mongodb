import {Component, OnInit} from '@angular/core';

import { Message } from './modules/messages/configs/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public messages: Message[] = [
        new Message('Some message', 'Nikolay'),
        new Message('Something new', 'Nikolay')
    ];

    constructor() {}

    public ngOnInit() { }

    public handleEdit(value) {
        this.messages.forEach(element => {
            element.content = value;
        });
    }
    
}