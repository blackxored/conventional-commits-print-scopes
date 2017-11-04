const gitlog = require('git-log-reader');
const { compose, uniq, reject, isNil, map, prop } = require('ramda');

function getScopes() {
  // commits is an array of commit objects
  const commits = gitlog.read({
    fields: ['abbrevHash', 'subject', 'body'],
    matchers: [
      {
        pattern: '#(\\d+)',
        fields: ['issue'],
      },
      {
        regexp: /^(\w*)(?:\(([\w\$\.]*)\))?\: (.*)$/,
        fields: ['type', 'scope', 'subject'],
      },
    ],
  });

  return compose(uniq, reject(isNil), map(prop('scope')))(commits);
}

module.exports = getScopes;
