var fs = require('fs');
var request = require('request');
var inquirer = require('inquirer');
// var Spotify = require('node-spotify-api');
var twitter = require('twitter');

var querySpotify = require('./spotify.js');

var twitterKeys = require('./keys');
var spotifyKeys;

console.log(twitterKeys.consumer_key);


// var querySpotify = function(song) {
// 	var spotify = new Spotify({
// 		id: "4f3db5947be24cec9958bcdc65e546a9",
// 		secret: "1bbd8c8be5644aec94998424e0832de9"
// 	});
// 	this.song = song;
// 	this.getSong = function(){
// 	if (this.song !== "") {
// 		spotify.search({ type: 'track', query: this.song, limit: 4 }, function(err, data) {
// 	  		if (err) {
// 	  		  return console.log('Error occurred: ' + err);
// 	  		}
// 	  		for (i = 0; i < 4; i++)	{	
// 				console.log("track: " + data.tracks.items[i].name + 
// 					"\nalbum: " + data.tracks.items[i].album.name + 
// 					"\nartist: " + data.tracks.items[i].artists[0].name + 
// 					"\nsong preview: " + data.tracks.items[i].preview_url +
// 					"\n>>––––––––> [ø] <––––––––<<");
// 				var logger = ("\ntrack: " + data.tracks.items[i].name + 
// 					"\nalbum: " + data.tracks.items[i].album.name + 
// 					"\nartist: " + data.tracks.items[i].artists[0].name + 
// 					"\nsong preview: " + data.tracks.items[i].preview_url +
// 					"\n>>––––––––> [ø] <––––––––<<");
// 				fs.appendFile('log.txt', logger, (error) => { if (error) throw error; });
// 				var newObject = JSON.stringify(data.tracks.items, null, 2);
// 			}
// 		});
// 	}
// 	else {
// 		spotify.search({ type: 'track', query: 'The Sign', limit: 6 }, function(err, data) {
// 	  		if (err) {
// 	  		  return console.log('Error occurred: ' + err);
// 	  		}		
// 			console.log("track: " + data.tracks.items[5].name); 
// 			console.log("album: " + data.tracks.items[5].album.name); 
// 			console.log("artist: " + data.tracks.items[5].artists[0].name); 
// 			console.log("song preview: " + data.tracks.items[5].preview_url); 
// 			console.log(">>––––––––> <3 <––––––––<<");
// 		});
// 	}
// 	}
// }



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
			console.log("tweetle deet deet dee doo");
			console.log(cmd);
		}
		else if (cmd.commandTaken === "spotify-this-song") {
			console.log("we'll strike up a tune then");
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
		}
		else if (cmd.commandTaken === "do-what-it-says") {
			console.log("yeah, alexa");
		}
	});
}

askQuestion();




	// spotify.SOMETHING(cmd.command-taken, function(err, data) {
	// 	console.log(JSON.stringify(data, null, 2));
	// });






// inquirer.prompt([    
// 		    {
// 		      type: "list",
// 		      message: "Which mode of transport do you choose?",
// 		      choices: ["donkey", "camel", "oliphant"],
// 		      name: "mode"
// 		    },
// 		    {
// 		      type: "input",
// 		      message: "What is your name?",
// 		      name: "username"
// 		    },
// 		    {
// 		      type: "confirm",
// 		      message: "Are you sure:",
// 		      name: "confirm",
// 		      default: true
// 		    },
// 		    {
// 		      type: "password",
// 		      message: "Open the portal, Ali Babba...",
// 		      name: "password"
// 		    },
// 		    {
// 		      type: "confirm",
// 		      message: "Are you sure:",
// 		      name: "confirm",
// 		      default: true
// 		    },

// 		  ]).then(function(inquirerResponse) {});




