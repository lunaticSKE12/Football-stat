import { CsvFileReader } from './CsvFileReader';
import { MatchData } from './MatchData';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // 'H' ,'A', 'D'
        row[6],
      ];
    });
  }
}

export class TeamReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  matches: TeamData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): TeamData => {
      return [dateStringToDate(row[0]), row[1], row[2], parseInt(row[3])];
    });
  }
}
