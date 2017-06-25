import { DizzyPage } from './app.po';

describe('dizzy App', () => {
  let page: DizzyPage;

  beforeEach(() => {
    page = new DizzyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
