var inquirer = require('inquirer');
var fs = require('fs');
var querySpotify = require('./spotify.js');
var grabTweets = require('./twitter.js');
var queryOMDB = require('./omdb.js');

// This the primary function which prompts the user, 
//	then takes the reponse and funnels it to the corresponding function 
//	that will either prompt with a secondary question or provide the user with a relevant answer.
var askQuestion = function() {
	inquirer.prompt([    
	    {
	      type: "list",
	      message: "Which command would you like to issue?",
	      choices: ["grab-my-latest-tweets", "lookup-a-song", "lookup-a-movie", "return-random"],
	      name: "commandTaken"
	    }
	]).then(function(cmd){
		if (cmd.commandTaken === "grab-my-latest-tweets") {
			console.log("Behold my latest tweets!");
			grabTweets();
			setTimeout(askQuestion, 400);
		}
		else if (cmd.commandTaken === "lookup-a-song") {
			inquirer.prompt([
				{
					type: "input",
					message: "What song would you like me to pull up?",
					name: "songRequest"
				}
			]).then(function(request){
				var songRequested = new querySpotify(request.songRequest);
				songRequested.getSong();
				setTimeout(askQuestion, 400);
			});
		}
		else if (cmd.commandTaken === "lookup-a-movie") {
			inquirer.prompt([
				{
					type: "input",
					message: "What movie would you like me to pull up?",
					name: "movieRequest"
				}
			]).then(function(movie){
				var movieSought = new queryOMDB(movie.movieRequest);
				movieSought.getMovie();
				setTimeout(askQuestion, 400);
			});
		}
		else if (cmd.commandTaken === "return-random") {
			doRandom();
			setTimeout(askQuestion, 400);
		}
	});
}

var doRandom = function() {
	fs.readFile('random.txt', 'utf8', (error, random) => { 
		if (error) throw error; 
		var array = random.split(",");
		var selection = array[0];
		var input = array[1];
		if (selection === "grab-my-latest-tweets") {
			grabTweets();
		}
		else if (selection === "lookup-a-song") {
			var songRequested = new querySpotify(input);
			songRequested.getSong();
			return;
		}
		else if (selection === "lookup-a-movie") {
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

