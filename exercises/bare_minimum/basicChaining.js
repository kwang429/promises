/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promiseConstructor = require('./promiseConstructor');
var promisification = require('./promisification');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO

  // Read first line of file (PluckFirstLineFromFileAsync) in readFilePath
  // Send request for that user's git hub prof (GetGitHubProfile)
  // write JSON response to writeFilePath

  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath) // returns the first line in a file --> in this case, a username
    .then((username) => {
      console.log(username);
      promisification.getGitHubProfileAsync(username);
    }) // takes in a username as an arg then submits a GET request for that profile --> returns an obj with that profile data
    .then((data) => {
      console.log(data);
      promiseConstructor.writeFileAsync(writeFilePath, data);
    }); // turns the data obj into a text and writes it into a file

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
