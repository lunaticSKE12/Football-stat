"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlReport_1 = require("./reportTarget/HtmlReport");
var WinAnalysis_1 = require("./anaalyzer/WinAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    // static printHello() {
    //   console.log('hi');
    // }
    Summary.winAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
// Summary.printHello();
