var inquirer = require('inquirer');
var fs = require('fs');
var querySpotify = require('./spotify.js');
var grabTweets = require('./twitter.js');
var queryOMDB = require('./omdb.js');

var askQuestion = function() {
	inquirer.prompt([    
	    {
	      type: "list",
	      message: "Which command would you like to issue?",
	      choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
	      name: "commandTaken"
	    }
	]).then(function(cmd){
		if (cmd.commandTaken === "my-tweets") {
			console.log("Behold my latest tweets!");
			grabTweets();
		}
		else if (cmd.commandTaken === "spotify-this-song") {
			inquirer.prompt([
				{
					type: "input",
					message: "What song would you like me to pull up?",
					name: "songRequest"
				}
			]).then(function(request){
				var songRequested = new querySpotify(request.songRequest);
				songRequested.getSong();
			});
		}
		else if (cmd.commandTaken === "movie-this") {
			console.log("Cinema IS Paradiso");
			inquirer.prompt([
				{
					type: "input",
					message: "What movie would you like me to pull up?",
					name: "movieRequest"
				}
			]).then(function(movie){
				var movieSought = new queryOMDB(movie.movieRequest);
				movieSought.getMovie();
			});
		}
		else if (cmd.commandTaken === "do-what-it-says") {
			doRandom();
		}
	});
}

var doRandom = function() {
	fs.readFile('random.txt', 'utf8', (error, random) => { 
		if (error) throw error; 
		var array = random.split(",");
		var selection = array[0];
		var input = array[1];
		if (selection === "my-tweets") {
			grabTweets();
		}
		else if (selection === "spotify-this-song") {
			var songRequested = new querySpotify(input);
			songRequested.getSong();
			return;
		}
		else if (selection === "movie-this") {
			var movieSought = new queryOMDB(input);
			movieSought.getMovie();
		}
		else {
			console.log("Well, sorry, I'm outta gas...");
			return;
		}
	});
};


askQuestion();

