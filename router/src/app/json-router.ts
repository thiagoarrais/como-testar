
import { JsonProcessor } from './json-processor';
import { JsonMessage } from './json-message';

export class JsonRouter {
  private processors: JsonProcessor[];
    
  constructor() {
    this.processors = [];
  }
  
  public addProcessor(processor: JsonProcessor) {
    if (processor) {
        this.processors.push(processor);
    }
  }

  public process(message: JsonMessage) {
    this.processors.forEach((processor) => {
      if (processor.match(message)) {
        processor.process(message);
        return;
      }
    });
  }
}