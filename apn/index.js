var Formats = require('./formats');
var States = require('./states');

module.exports = {
    lookup: function(state, county) {
        if (state == undefined) {
            state == false;
        }
        if (county == undefined) {
            county == false;
        }
        if (state.length === 2) {
            return Formats[state][county]["formats"];
        } else {
            for (item in States) {
                if (States.hasOwnProperty(item)) {
                    if (States[item] === state) {
                        return Formats[item][county]["apn_formats"];
                    }
                }
            }
        }
    },
    validate: function(apn_input, state, county) {
        if (state == undefined) {
            state == false;
        }
        if (county == undefined) {
            county == false;
        }
        if (state.length === 2) {
            patterns = Formats[state][county]["regex"];
            for (var i = 0; i < patterns.length; i++) {
                if (apn_input.search(patterns[i]) !== -1) {
                    return true;
                }
            }
            return false;
        } else {

        }
    }
}
