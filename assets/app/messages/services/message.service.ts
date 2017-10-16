import {Message} from "../configs/message.model";

export class MessageService {
    public messages: Message[] = [];

    public addMessage(message: Message): void {
        this.messages.push(message);
    }

    public getMessages(): any[] {
        return this.messages;
    }

    public deleteMessage(message: Message): void {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}