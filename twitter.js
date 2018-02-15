var fs = require('fs');
var Twitter = require('twitter');
var keys = require('./keys');

var client = new Twitter(keys.twitter);

var grabTweets = function() {
	var params = {screen_name: '3g0oo'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (error) {
		  return console.log('Error occurred: ' + error);
		}	
		console.log("Total # of tweets I have made: " + tweets[0].user.statuses_count);
	  	for (i = 0; i < tweets[0].user.statuses_count; i++) {
	  		console.log("The tweet text: \'" + tweets[i].text + "\'");
			console.log("Tweet created: " + tweets[i].created_at);
			console.log('<^>____<^>____<^>____<^>')
			var logger = ("\nTotal # of tweets I have made: " + tweets[0].user.statuses_count + 
				"\nThe tweet text: \'" + tweets[i].text + "\'" + 
				"\nTweet created: " + tweets[i].created_at + 
				'\n<^>____<^>____<^>____<^>'
				);
			fs.appendFile('log.txt', logger, (error) => { if (error) throw error; });
		}
	});
};

module.exports = grabTweets;