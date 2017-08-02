import { JsonRouter } from './json-router';
import { JsonProcessor, EvenProcessor, OddProcessor } from './json-processor';
import { JsonMessage } from './json-message';

describe('JSON Router Testing', () => {

  let router: JsonRouter;
  let evenProcessor: EvenProcessor;
  let oddProcessor: OddProcessor;
  
  beforeEach(() => {
    router = new JsonRouter();

    evenProcessor = new EvenProcessor();
    oddProcessor = new OddProcessor();
    
    router.addProcessor(evenProcessor);
    router.addProcessor(oddProcessor);
  });

  it('JSON Router should be created', () => {
    expect(router).toBeDefined();
  });

  describe('JSON Router triggers right processors', () => {

    beforeEach(() => {
      spyOn(evenProcessor, 'match').and.callThrough();
      spyOn(evenProcessor, 'process').and.callThrough();

      spyOn(oddProcessor, 'match').and.callThrough();
      spyOn(oddProcessor, 'process').and.callThrough();
    });

    it('JSON Message with even code calls even processor', () => {
        let evenMessage = { code: 10, content: 'ten is even'};
        
        router.process(evenMessage); 

        expect(evenProcessor.match).toHaveBeenCalledWith(evenMessage);
        expect(oddProcessor.match).not.toHaveBeenCalledWith();

        expect(evenProcessor.process).toHaveBeenCalledWith(evenMessage);
        expect(oddProcessor.process).not.toHaveBeenCalled();
    });

    it('JSON Message with odd code calls odd processor', () => {
        let oddMessage = { code: 5, content: 'five is odd' };
        
        router.process(oddMessage);        

        expect(evenProcessor.match).toHaveBeenCalledWith(oddMessage);
        expect(oddProcessor.match).toHaveBeenCalledWith(oddMessage);

        expect(evenProcessor.process).not.toHaveBeenCalled();
        expect(oddProcessor.process).toHaveBeenCalledWith(oddMessage);    
    });

  });    
});