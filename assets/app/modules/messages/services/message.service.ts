import {EventEmitter, Injectable} from "@angular/core";
import {Response} from "@angular/http";
import 'rxjs/Rx';

import {Message} from "../configs/message.model";
import {Observable} from "rxjs/Observable";
import { HttpService } from "../../shared";

@Injectable()

export class MessageService {
    public messages: Message[] = [];
    public messageIsEdit = new EventEmitter<Message>();
    public messageUrl: string = `http://localhost:3000/message`;

    constructor(private httpService: HttpService) {}

    public addMessage(message: Message): Observable<any> {
        return this.httpService.post(this.messageUrl, message)
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, result.obj.firstName, result.obj._id, result.obj.userId);
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
                    transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
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
        return this.httpService.patch(`${this.messageUrl}/${message.messageId}`, message)
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