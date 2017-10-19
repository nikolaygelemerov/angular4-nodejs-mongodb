import { EventEmitter, Injectable } from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';

import {Message} from "../configs/message.model";
import {Observable} from "rxjs/Observable";
import { HttpService } from "../../shared/services/http.service";
import { CONTENT_TYPE } from "../../shared/constants/request-headers";

@Injectable()

export class MessageService {
    public messages: Message[] = [];
    public messageIsEdit = new EventEmitter<Message>();
    public messageUrl: string = `http://localhost:3000/message`;
    public headers: Headers = new Headers({'Content-Type': CONTENT_TYPE});

    constructor(private httpService: Http) {}

    public addMessage(message: Message): Observable<any> {
        const body = JSON.stringify(message);

        return this.httpService.post(this.messageUrl, body, {headers: this.headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'Nikolay', result.obj._id, null);
                this.messages.push(message);

                return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public getMessages(): Observable<any> {
        return this.httpService.get(this.messageUrl)
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

        return this.httpService.patch(`${this.messageUrl}/${message.messageId}`, body, {headers: this.headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public deleteMessage(message: Message): Observable<any> {
        this.messages.splice(this.messages.indexOf(message), 1);

        return this.httpService.delete(`${this.messageUrl}/${message.messageId}`)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}