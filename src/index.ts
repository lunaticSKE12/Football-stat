import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

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

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
