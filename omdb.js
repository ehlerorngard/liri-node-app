var request = require('request');
var fs = require('fs');
var keys = require('./keys');

var queryOMDB = function(movie) {
	this.movie = movie;
	this.getMovie = function(){
		if (this.movie !== "") {
			request('http://www.omdbapi.com/?apikey=' 
					+ keys.omdb.key 
					+ '&t=' 
					+ this.movie, function (error, response, body) {
				if (error) throw error;
				var newBody = JSON.parse(body);
				console.log(
					"Movie title: " + newBody.Title +
					"\nYear: " + newBody.Year +
					"\nIMDB rating: " + newBody.imdbRating +
					"\nRotten Tomatoes: " + newBody.Ratings[1].Value +
					"\nCountry of origin: " + newBody.Country +
					"\nLanguage: " + newBody.Language +
					"\nPlot: " + newBody.Plot +
					"\nActors: " + newBody.Actors + 
					"\n|–––––––<o>–––––––|"
				);
				var logger = (
					"\nMovie title: " + newBody.Title +
					"\nYear: " + newBody.Year +
					"\nIMDB rating: " + newBody.imdbRating +
					"\nRotten Tomatoes: " + newBody.Ratings[1].Value +
					"\nCountry of origin: " + newBody.Country +
					"\nLanguage: " + newBody.Language +
					"\nPlot: " + newBody.Plot +
					"\nActors: " + newBody.Actors + 
					"\n|–––––––<o>–––––––|"
				);
				fs.appendFile('log.txt', logger, (error) => { if (error) throw error; });
			});
		}
		else {
			var random = Random
			request('http://www.omdbapi.com/?apikey=40e9cece&t=mr.+nobody&y=2009', function (error, response, body) {
				if (error) throw error;
				var newBody = JSON.parse(body);
				console.log(
					"Movie title: " + newBody.Title +
					"\nYear: " + newBody.Year +
					"\nIMDB rating: " + newBody.imdbRating +
					"\nRotten Tomatoes: " + newBody.Ratings[1].Value +
					"\nCountry of origin: " + newBody.Country +
					"\nLanguage: " + newBody.Language +
					"\nPlot: " + newBody.Plot +
					"\nActors: " + newBody.Actors + 
					"\n|–––––––<o>–––––––|"
				);
			});
		}	
	};
};

module.exports = queryOMDB;
