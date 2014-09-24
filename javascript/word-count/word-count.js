var words = function(input) {
  'use strict';
  
  var results = {};
  
  input = input.toLowerCase();
  input = input.replace(/[^\u00C0-\u1FFF\u2C00-\uD7FF\w]+/gmi, ' ');
  input = input.trim().split(' ');
  
  for (var i=0;i<input.length;i++) {
    if (results.hasOwnProperty([input[i]])) {
      results[input[i]]++;
    } else {
      results[input[i]] = 1;
    }
  }
  
  return results;
  
};

module.exports = words;
