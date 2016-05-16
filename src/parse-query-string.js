/**
 * Parse a query string into keys and values
 * @param  {string} string
 * @return {Object}
 */
function parseQueryString(string) {
  return string
    .substring(1)
    .split('&')
    .map(q => q.split('='))
    .reduce((prev, current) => {
      return Object.assign(prev, {
        [current[0]]: current[1]
      });
    }, {});
}

export default parseQueryString;
