import { Summary } from './Summary';
import { WinAnalysis } from './anaalyzer/WinAnalysis';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

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

const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in someting satisfying
// the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
