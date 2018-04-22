const getScopes = require('../getScopes');

describe('getScopes', () => {
  it('works', () => {
    expect(getScopes()).toMatchSnapshot();
  });
});
