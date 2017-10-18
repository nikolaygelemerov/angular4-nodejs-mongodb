import { EventEmitter, Injectable } from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';

import {Message} from "../configs/message.model";
import {Observable} from "rxjs/Observable";

@Injectable()

export class MessageService {
    public messages: Message[] = [];
    public messageIsEdit = new EventEmitter<Message>();

    constructor(private httpService: Http) {}

    public addMessage(message: Message): Observable<any> {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.httpService.post('http://localhost:3000/message', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'Nikolay', result.obj._id, null);
                this.messages.push(message);

                return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public getMessages(): Observable<any> {
        return this.httpService.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];

                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Dummy', message._id, null));
                }

                this.messages = transformedMessages;

                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public editMessage(message: Message): void {
        this.messageIsEdit.emit(message);
    }

    public updateMessage(message: Message): Observable<any> {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.httpService.patch(`http://localhost:3000/message/${message.messageId}`, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public deleteMessage(message: Message): Observable<any> {
        this.messages.splice(this.messages.indexOf(message), 1);

        return this.httpService.delete(`http://localhost:3000/message/${message.messageId}`)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}