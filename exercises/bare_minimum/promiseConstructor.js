/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise ((resolve, reject) => {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        reject(err);
      } else {
        var fileText = fileData.toString();
        resolve(fileText.split('\n').shift());
      }
    });
  }).then(firstLine => firstLine);
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise((resolve, reject) => {
    request(url, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  }).then(statusCode => statusCode);
};

var writeFileAsync = function(filePath, textData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.stringify(textData));
      }
    });
  }).then(text => text);
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync,
  writeFileAsync: writeFileAsync
};
