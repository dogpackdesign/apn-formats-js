var apn = require('../index');

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

// Connecticut
console.log("Fairfield", apn.lookup("Connecticut", "Fairfield"));
console.log("Fairfield2", apn.lookup("Ct", "fairfieLd"));
console.log("Hartford", apn.lookup("Ct", "hartford"));
console.log("Litchfield", apn.lookup("Ct", "litchfield"));
console.log("Middlesex", apn.lookup("Ct", "middlesex"));
console.log("New Haven", apn.lookup("Ct", "newhaVen"));
console.log("New London", apn.lookup("Ct", "new london"));
console.log("Tolland", apn.lookup("Ct", "tolland"));
console.log("Windham", apn.lookup("Ct", "windham"));
