/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var Promise = require('bluebird');
var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  let promise = new Promise((resolve, reject)=>{
    fs.readFile(filePath, 'utf8', (err, data)=>{
      if (err) {
        reject(err);
      } else {
        data = data.split('\n')[0];
        resolve(data);
      }
    });
  });
  return promise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  var promise = new Promise((resolve, reject)=>{
    request(url, (err, response)=>{
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
