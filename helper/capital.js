var formats = require('../apn/formats.json');
var states = require('../apn/states.json');
var fa = require('fs');

for (state in formats) {
  if (formats.hasOwnProperty(state)) {
    var newState = state.toLowerCase();
    formats[newState] = formats[state]
    delete formats[state];
    // for (county in formats[state]) {
    //   if (formats[state].hasOwnProperty(county)) {
    //     var newCounty = county.toLowerCase();
    //     formats[state][newCounty] = formats[state][county];
    //     delete formats[state][county];
    //   }
    // }
  }
}
console.log(formats);
fa.writeFile("formats2.json", JSON.stringify(formats, null, 4));

// for (state in states) {
//   if (states.hasOwnProperty(state)) {
//     var newState = state.toLowerCase();
//     states[newState] = states[state];
//     delete states[state];
//   }
// }
// console.log(states);
// fa.writeFile("states2.json", JSON.stringify(states, null, 4));
