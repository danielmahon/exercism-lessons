var Bob = function() {
'use strict';

  this.answers = {
    FINE: 'Fine. Be that way!',
    SURE: 'Sure.',
    WHOA: 'Woah, chill out!',
    WHAT: 'Whatever.'
  };
  
  this.hey = function(input) {
    input = input.trim();
    if (input === '') {
      return this.answers.FINE;
    } else if (input === input.toUpperCase() && /[A-Za-z]/.test(input)) {
      return this.answers.WHOA;
    } else if (/\?$/.test(input)) {
      return this.answers.SURE;
    } else {
      return this.answers.WHAT;
    }
  };
};

module.exports = Bob;
