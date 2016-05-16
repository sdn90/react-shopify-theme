import parseQueryString from './../src/parse-query-string';
import expect from 'expect';

describe('Parse query string', () => {
  it('should work', () => {
    const queryString = '?variant=12345';
    const parsedQuery = parseQueryString(queryString);

    expect(parsedQuery).toEqual({ 'variant': '12345' });
  });
});
