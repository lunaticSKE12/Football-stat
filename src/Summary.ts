import { HtmlReport } from './reportTarget/HtmlReport';
import { WinAnalysis } from './anaalyzer/WinAnalysis';
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static printHello() {
    console.log('summary');
  }

  static winAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    const team = this.analyzer.run(team);

    this.outputTarget.print(team);
    this.outputTarget.print(output);
  }
}

// Summary.printHello();
