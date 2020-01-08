"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlReport_1 = require("./reportTarget/HtmlReport");
var Summary_1 = require("./Summary");
var WinAnalysis_1 = require("./anaalyzer/WinAnalysis");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
// import fs from 'fs';
// const reader = new MatchReader('football.csv
// console.log(reader.data);
// const dateOfFirstMatch = reader.data[0][0];
// console.log(matchs);
// const homeWin = 'H';
// const awayWin = 'A';d
// const draw = 'D';
// const printMatchResult = (): MatchResult => {
//   if (matchs[5] === 'H') {
//     return MatchResult.HomeWin;
//   }
//   return MatchResult.AwayWin;
// };
// Create an obj that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in someting satisfying
// the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinAnalysis_1.WinAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
