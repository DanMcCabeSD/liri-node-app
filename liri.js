require("dotenv").config();


 var keys = require("./keys");

 var Twitter = require('twitter');
 var Spotify = require('node-spotify-api');
 var request = require('request');
 var fs = require('fs');

  var client = new Twitter(keys.twitter);

var getMyTweets = function() {   

var client = new Twitter(keys.twitter);
 
var params = {screen_name:"UCSDhomework"};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (i = 0; i < tweets.length; i++) { 
    console.log(tweets[i].text);
}
   
  }
});

//do not have spotify account attached
	}
var getMeSpotify = function() {   
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
	}

var getMeMovie = function() {   
	
	}
var doWhatItSays = function() {   
	
	}
// Function for determining which command is executed 
var pick = function(caseData, functionData) {  
 switch (caseData) { 

    case "my-tweets":       
    getMyTweets();       
    break;     
    case "spotify-this-song":       
    getMeSpotify(functionData);       
    break;     
    case "movie-this":       
    getMeMovie(functionData);       
    break;     
    case "do-what-it-says":       
    doWhatItSays();       
    break;     
    default:  
    console.log("LIRI doesn't know that");   
	} 
};

var main = function(argOne, argTwo) {   
	pick(argOne, argTwo);
}
main(process.argv[2], process.argv[3]);





