var fs = require('fs');
var dateIdeas = require('./dateIdeasNode.js');
// it's the same file as dateIdeas, just format it for module.exports = dateObj instead of var dateIdeas = dateObj
// console.log('dateIdeas:',dateIdeas);

// dateIdeasToParse is just a big blob of text. no extra quote at the start or end. the first line must have energyLevel: dateName
var rawText = fs.readFileSync('./dateIdeasToParse.txt', 'utf8');

var lines = rawText.split('\n');

var currentDate = {};
var currentEnergyLevel;

for(var i = 0; i < lines.length; i++) {
  if(i % 2 === 0) {
    currentDate = {};
    var lineParts = lines[i].split(': ');
    currentEnergyLevel = lineParts[0];
    currentDate.name = lineParts[1];
  } else {
    currentDate.description = lines[i];
    // console.log(currentDate);
    // console.log(currentEnergyLevel);
    // console.log(currentDate);
    dateIdeas[currentEnergyLevel].push(currentDate);
    // we could overwrite currentEnergyLevel and currentDate here, but we'll just do that in the next iteration of the for loop. 
    // TODO: add to existing dates array at energyLevel key, without energy level prop in obj
    // clear currentDate
  }
}

// copy/paste the results of this into dateIdeas.js happily it does alright with whitespacing and indentation
console.log(dateIdeas);
