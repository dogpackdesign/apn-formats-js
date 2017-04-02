var Apn = require('../index');

// true
console.log(Apn.validate("123456-7890", "wa", "king"));
console.log(Apn.validate("12345678", "wa", "king"));
console.log(Apn.validate("123456-1234 56", "wa", "king"));
console.log(Apn.validate("123456-7890", "WA", "KING"));
console.log(Apn.validate("123456-7890", "wA", "kINg"));
console.log(Apn.validate("123456-7890", "washington", "king"));
console.log(Apn.validate("123456-7890", "WASHINGTON", "king"));
console.log(Apn.validate("123456-7890", "waSHingToN", "king"));
console.log(Apn.validate("12-34-  56-7890.1234", "wv", "summers"));
console.log(Apn.validate("12A34B56CD-78901-23456", "Oregon", "wheeler"));

// Connecticut
console.log(Apn.validate("ASDF B:12 V:67", "ct", "fairfield"));
console.log(Apn.validate("ASDF B:345 B:789", "ct", "HARTFORD"));
