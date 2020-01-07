import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

// import fs from 'fs';

const reader = new CsvFileReader('football.csv');
reader.read();

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

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} game(s)`);
