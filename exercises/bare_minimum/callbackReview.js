/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  // read file in filepath
  // split the file text by lines - \n --> gives an array of each line
  // return the first one
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      callback(err);
    } else {
      var data = fileData.toString();
      callback(null, data.split('\n').shift());
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  // response.statuscode
  request(url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
