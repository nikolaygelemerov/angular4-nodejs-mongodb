import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';

import {Message} from "../configs/message.model";
import {Observable} from "rxjs/Observable";
import { Res } from "awesome-typescript-loader/dist/checker/protocol";

@Injectable()

export class MessageService {
    public messages: Message[] = [];

    constructor(private httpService: Http) {}

    public addMessage(message: Message): Observable<any> {
        this.messages.push(message);

        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.httpService.post('http://localhost:3000/message', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public getMessages(): Observable<any> {
        return this.httpService.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];

                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Dummy', message.id, null));
                }

                this.messages = transformedMessages;

                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public deleteMessage(message: Message): void {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}