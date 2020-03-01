const request = require('request');
request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2020-01-21', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var parsedData = JSON.parse(body);
  console.log("Sunrise is at ", parsedData["results"]["sunrise"]); // Print the HTML for the Google homepage.
});