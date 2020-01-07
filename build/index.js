"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matchs = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
// console.log(matchs);
var homeWin = 'H';
var awayWin = 'A';
var draw = 'D';
var manUnitedWins = 0;
for (var _i = 0, matchs_1 = matchs; _i < matchs_1.length; _i++) {
    var match = matchs_1[_i];
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " game(s)");
