"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./../MatchResult");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinAnalysis.prototype.run = function (matches) {
        var wins = 0;
        var wins1 = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === 'Bournemouth' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Bournemouth' &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        for (var _a = 0, matches_2 = matches; _a < matches_2.length; _a++) {
            var match = matches_2[_a];
            if (match[1] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins1++;
            }
            else if (match[2] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins1++;
            }
        }
        return "Team " + this.teamName + " won " + wins + " games, Team " + this.teamName + " won " + wins1 + " games ";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
