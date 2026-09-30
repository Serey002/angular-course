import { CustomDirective } from './custom-directive';

describe('CustomDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomDirective({
      nativeElement: document.createElement('div'),
    });
    expect(directive).toBeTruthy();
  });
});
