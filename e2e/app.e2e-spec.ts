import { MYPOCPage } from './app.po';

describe('mypoc App', () => {
  let page: MYPOCPage;

  beforeEach(() => {
    page = new MYPOCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
