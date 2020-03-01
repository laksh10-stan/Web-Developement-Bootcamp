// const request = require('request');
// request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
//   eval(require('locus'));
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   var parsedData = JSON.parse(body);
//   console.log( parsedData["address"]["geo"]); // Print the HTML for the Google homepage.
// });

//alternate syntax without eval

const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const parsedData = JSON.parse(body);
  console.log( parsedData.address.geo.lat); // Print the HTML for the Google homepage.
});