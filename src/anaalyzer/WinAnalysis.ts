import { MatchResult } from './../MatchResult';
import { MatchData } from './../MatchData';
import { Analyzer } from './../Summary';

export class WinAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    let wins1 = 0;

    for (let match of matches) {
      if (match[1] === 'Bournemouth' && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === 'Bournemouth' &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    for (let match of matches) {
      if (match[1] === 'Liverpool' && match[5] === MatchResult.HomeWin) {
        wins1++;
      } else if (match[2] === 'Liverpool' && match[5] === MatchResult.AwayWin) {
        wins1++;
      }
    }

    return `Team ${this.teamName} won ${wins} games, Team ${this.teamName} won ${wins1} games `;
  }
}
