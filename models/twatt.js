var OAuth = require('oauth');
require('dotenv').config();

var searching = function(done) {
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8',
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    function(e, data) {
      if (e) console.error(e);
      done(data);
    });
}
module.exports = searching;
