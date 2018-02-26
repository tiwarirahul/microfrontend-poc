import { ShellPage } from './app.po';

describe('shell App', () => {
  let page: ShellPage;

  beforeEach(() => {
    page = new ShellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
