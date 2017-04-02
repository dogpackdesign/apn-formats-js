var apn = require('../apn/index');

console.log(apn.lookup("Washington", "King"));
console.log(apn.lookup("washington", "king"));
console.log(apn.lookup("wAsHinGtOn", "kINg"));
console.log(apn.lookup("WASHINGTON", "KING"));
console.log(apn.lookup("WA", "king"));
console.log(apn.lookup("wa", "king"));
console.log(apn.lookup("Wa", "king"));
console.log(apn.lookup("wA", "king"));
console.log(apn.lookup("hi"));
console.log(apn.lookup());
console.log(apn.lookup("Nebraska", "Douglas"));
console.log(apn.lookup("DC"));
console.log(apn.lookup("tx", "dallas"));
