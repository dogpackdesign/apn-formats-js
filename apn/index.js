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
    verifyStateAbbrev: function(state) {
        for (item in States) {
            if (States.hasOwnProperty(item)) {
                if (item === state) {
                    return true;
                }
            }
        }
        throw state + " is not a valid state name.";
    },
    stateAbbrevConvert: function(state) {
        for (item in States) {
            if (States.hasOwnProperty(item)) {
                if (States[item] === state) {
                    return item;
                }
            }
        }
        throw state + " is not a valid state name.";
    },
    lookup: function(state, county) {
        state = this.modifyInput(state);
        this.verifyStateAbbrev(state);
        county = this.modifyInput(county);
        if (state) {
            if (county) {
                if (state.length === 2) {
                    try {
                        return Formats[state][county]["formats"];
                    } catch (err) {
                        throw county + " is invalid county name.";
                    }
                } else {
                    for (item in States) {
                        if (States.hasOwnProperty(item)) {
                            if (States[item] === state) {
                                try {
                                    return Formats[item][county]["apn_formats"];
                                } catch (err) {
                                    throw county + " is invalid county name.";
                                }
                            }
                        }
                    }
                    throw county + " is invalid county name.";
                }
            } else {
                var data = {};
                if (state.length === 2) {
                    for (section in Formats[state]) {
                        if (Formats[state].hasOwnProperty(section)) {
                            data[section] = Formats[state][section].formats;
                        }
                    }
                } else {
                    for (item in States) {
                        if (States.hasOwnProperty(item)) {
                            if (States[item].replace(" ", "") == state.replace(" ", "")) {
                                for (section in Formats[item]) {
                                    data[section] = Formats[item][section].formats;
                                }
                            }
                        }
                    }
                }
                return data;
            }
        } else {
            return Formats;
        }

    },
    validate: function(apn_input, state, county) {
        if (apn_input) {
            if (state) {
                state = state.toLowerCase();
                county = this.modifyInput(county);
                if (state.length === 2) {
                    if (this.verifyStateAbbrev(state)) {
                        try {
                            patterns = Formats[state].county.regex;
                        } catch (err) {
                            throw county + " is not a valid county name for state: " + state;
                        }
                        for (var i = 0; i < patterns.length; i++) {
                            if (apn_input.search(patterns[i]) !== -1) {
                                return true;
                            }
                        }
                        return false;
                    }
                } else {
                    stateName = this.stateAbbrevConvert(state);
                    if (stateName) {
                        patterns = Formats[stateName][county].regex;
                        for (var i = 0; i < patterns.length; i++) {
                            if (apn_input.search(patterns[i]) !== -1) {
                                return true;
                            }
                        }
                        return false;
                    }
                    throw state + " is not a valid state name.";
                }
            } else {
                throw "No state given";
            }
        }
        throw "No APN value given";
    }
}
