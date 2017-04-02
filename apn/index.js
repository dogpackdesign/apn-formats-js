var Formats = require('./formats');
var States = require('./states');

module.exports = {
    modifyInput: function(input) {
        if (input == undefined) {
            return false;
        } else {
            return input.toLowerCase();
        }
    },
    verifyState: function(state) {
        if (state.length === 2) {
            for (item in States) {
                if (States.hasOwnProperty(item)) {
                    if (item === state) {
                        return item;
                    }
                }
            }
        } else {
            for (item in States) {
                if (States[item] === state) {
                    return item;
                }
            }
        }
        throw state + " is not a valid state name.";
    },
    lookup: function(state, county) {
        state = this.modifyInput(state);
        county = this.modifyInput(county);
        if (state) {
            state = this.verifyState(state);
            if (county) {
                try {
                    return Formats[state][county]["formats"];
                } catch (err) {
                    throw county + " is invalid county name.";
                }
            } else {
                var data = {};
                for (section in Formats[state]) {
                    if (Formats[state].hasOwnProperty(section)) {
                        data[section] = Formats[state][section].formats;
                    }
                }
                return data;
            }
        } else {
            for (st in Formats) {
                if (Formats.hasOwnProperty(st)) {
                    for (co in Formats[st]) {
                        if (Formats[st].hasOwnProperty(co)) {
                            delete Formats[st][co].regex;
                            delete Formats[st][co].fips;
                        }
                    }
                }
            }
            return Formats;
        }
    },
    validate: function(apn_input, state, county) {
        if (apn_input) {
            if (state) {
                state = this.verifyState(state.toLowerCase());
                county = this.modifyInput(county);
                try {
                    patterns = Formats[state][county].regex;
                } catch (err) {
                    throw county + " is not a valid county name for state: " + state;
                }
                for (var i = 0; i < patterns.length; i++) {
                    if (apn_input.search(patterns[i]) !== -1) {
                        return true;
                    }
                }
                return false;
            } else {
                throw "No state given";
            }
        }
        throw "No APN value given";
    }
}
