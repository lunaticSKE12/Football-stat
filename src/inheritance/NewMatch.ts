import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';
import { CsvFileReader } from './CsvFileReader';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [dateStringToDate(row[0]), parseInt(row[3]), parseInt(row[4])];
  }
}
