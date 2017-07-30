import { JsonRouter } from './json-router';
import { JsonProcessor, EvenJsonProcessor, OddJsonProcessor } from './json-processor';
import { JsonMessage } from './json-message';

describe('JSON Router Testing', () => {

  let router: JsonRouter;
  let evenProcessor: EvenJsonProcessor;
  let oddProcessor: OddJsonProcessor;
  
  beforeEach(() => {
    router = new JsonRouter();

    evenProcessor = new EvenJsonProcessor();
    oddProcessor = new OddJsonProcessor();
    
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
        let message = { code: 10, content: 'ten is even'};
        
        router.process(message); 

        expect(oddProcessor.process).not.toHaveBeenCalled();

        expect(evenProcessor.match).toHaveBeenCalledWith(message);
        expect(evenProcessor.process).toHaveBeenCalledWith(message);
    });

    it('JSON Message with odd code calls odd processor', () => {
        let message = { code: 5, content: 'five is odd' };
        
        let result = router.process(message);        

        expect(evenProcessor.process).not.toHaveBeenCalled();

        expect(oddProcessor.match).toHaveBeenCalledWith(message);
        expect(oddProcessor.process).toHaveBeenCalledWith(message);    
    });

  });    
});