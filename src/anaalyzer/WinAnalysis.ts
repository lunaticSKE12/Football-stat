import { MatchResult } from "./../MatchResult";
import { MatchData } from "./../MatchData";
import { Analyzer } from "./../Summary";

export class WinAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === "Bournemouth" && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === "Bournemouth" &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} games`;
  }
}
