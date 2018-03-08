import { TrabellerCoUsePage } from './app.po';

describe('trabeller-co-use App', () => {
  let page: TrabellerCoUsePage;

  beforeEach(() => {
    page = new TrabellerCoUsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
