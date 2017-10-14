import {Message} from "../configs/message.model";

export class MessageService {
    public messages: Message[] = [];

    public addMessage(message: Message) {
        this.messages.push(message);
    }

    public getMessages() {
        return this.messages;
    }

    public deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}