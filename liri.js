require("dotenv").config();


 var keys = require("./keys");

 var Twitter = require('twitter');
 var Spotify = require('node-spotify-api');
 var request = require('request');
 var fs = require('fs');
 var spotify = new Spotify(keys.spotify);
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
var getMeSpotify = function(songName) {   
  spotify.search(
  { 
    type: 'track',
    query: songName
  }, 
  function(err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }
    var songs= data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
        console.log (i);
        console.log (songs[i].album.name);
    }
  //  console.log(data.tracks.items); 
  }
  );
	};

var getMeMovie = function(movieName) {   

  var APIKey = "trilogy";
	 var queryURL =  "http://www.omdbapi.com/?t=" + movieName + "&apikey=" + APIKey;

request(queryURL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
var jsonData= JSON.parse(body);
  console.log (jsonData.Title);
  console.log (jsonData.Year);

});
	};
var doWhatItSays = function() {   
	fs.readFile ("random.txt", "utf8", function (err, data){
//    console.log (data);
  var dataArray = data.split(",");
  if (dataArray.length===2){
    pick(dataArray[0], dataArray[1]);
  }
  else if (dataArray.length===1){
    pick(dataArray[0]);
  }
  });
	};
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





