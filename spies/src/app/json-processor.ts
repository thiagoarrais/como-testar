import { JsonMessage } from './json-message';

export abstract class JsonProcessor {
    public abstract match(message: JsonMessage): boolean;
    public abstract process(message: JsonMessage): void;
}

export class EvenProcessor extends JsonProcessor {
    public match(message: JsonMessage): boolean {
        return message.code % 2 == 0; 
    };    
    public process(message: JsonMessage): void {
        console.log("Even JsonMessage Processor: " + 
            message.code + ' - ' + message.content);
    };
};

export class OddProcessor extends JsonProcessor {
    public match(message: JsonMessage): boolean {
        return message.code % 2 !== 0; 
    };
    public process(jsonMessage: JsonMessage): void {
        console.log("Odd JsonMessage Processor: " +
            jsonMessage.code + ' - ' + jsonMessage.content);
    };
};