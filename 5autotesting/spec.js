describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3500/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});