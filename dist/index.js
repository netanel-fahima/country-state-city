"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var country_json_1 = __importDefault(require("./lib/country.json"));
var state_json_1 = __importDefault(require("./lib/state.json"));
var _findEntry = function (source, id) {
    if (id && source != null) {
        var idx = source.findIndex(function (c) { return c.id === id; });
        return idx !== -1 ? source[idx] : "";
    }
    return "";
};
var _compare = function (a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
};
exports.default = {
    getCountryById: function (id) {
        return _findEntry(country_json_1.default, id);
    },
    getStateById: function (id) {
        return _findEntry(state_json_1.default, id);
    },
    //   getCityById: function(id: string): ICity {
    //     return _findEntry(cityList, id);
    //   },
    getStatesOfCountry: function (countryId) {
        var states = state_json_1.default.filter(function (value) { return value.country_id === countryId; });
        return states.sort(_compare);
    },
    //   getCitiesOfState: function(stateId: string): ICity[] {
    //     const cities = cityList.filter((value) => value.state_id === stateId);
    //     return cities.sort(_compare);
    //   },
    getAllCountries: function () {
        return country_json_1.default;
    },
};
