"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    // ex. 28/10/2018
    var dateParsed = dateString
        .split('/')
        .map(function (val) { return parseInt(val); });
    return new Date(dateParsed[2], dateParsed[1] - 1, dateParsed[0]);
};
