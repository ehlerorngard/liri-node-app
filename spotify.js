var Spotify = require('node-spotify-api');
var fs = require('fs');
var keys = require('./keys');

var querySpotify = function(song) {
	var spotify = new Spotify({
		id: keys.spotify.client_ID,
		secret: keys.spotify.client_secret
	});
	this.song = song;
	this.getSong = function(){
		if (this.song !== "") {
			spotify.search({ type: 'track', query: this.song, limit: 4 }, function(err, data) {
		  		if (err) {
		  		  return console.log('Error occurred: ' + err);
		  		}
		  		for (i = 0; i < 4; i++)	{	
					console.log("track: " + data.tracks.items[i].name + 
						"\nalbum: " + data.tracks.items[i].album.name + 
						"\nartist: " + data.tracks.items[i].artists[0].name + 
						"\nsong preview: " + data.tracks.items[i].preview_url +
						"\n>>––––––––> [ø] <––––––––<<");
					var logger = ("\ntrack: " + data.tracks.items[i].name + 
						"\nalbum: " + data.tracks.items[i].album.name + 
						"\nartist: " + data.tracks.items[i].artists[0].name + 
						"\nsong preview: " + data.tracks.items[i].preview_url +
						"\n>>––––––––> [ø] <––––––––<<");
					fs.appendFile('log.txt', logger, (error) => { if (error) throw error; });
				}
			});
		}
		else {
			spotify.search({ type: 'track', query: 'The Sign', limit: 6 }, function(err, data) {
		  		if (err) {
		  		  return console.log('Error occurred: ' + err);
		  		}		
				console.log("track: " + data.tracks.items[5].name); 
				console.log("album: " + data.tracks.items[5].album.name); 
				console.log("artist: " + data.tracks.items[5].artists[0].name); 
				console.log("song preview: " + data.tracks.items[5].preview_url); 
				console.log(">>––––––––> <3 <––––––––<<");
			});
		}
	}
};

module.exports = querySpotify;
