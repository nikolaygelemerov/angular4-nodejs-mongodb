import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';

import {Message} from "../configs/message.model";
import {Observable} from "rxjs/Observable";

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

    public getMessages(): any[] {
        return this.messages;
    }

    public deleteMessage(message: Message): void {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}