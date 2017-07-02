import { EdForaPage } from './app.po';

describe('ed-fora App', () => {
  let page: EdForaPage;

  beforeEach(() => {
    page = new EdForaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
