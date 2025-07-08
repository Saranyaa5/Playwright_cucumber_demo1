module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    dryRun: false,
    paths: ["src/test/features//*.feature"],
    require: [
      "src/test/steps//*.ts",
      "src/hooks//*.ts"
    ],
    format: [
      "progress-bar",
      "html:reports/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    requireModule: ["ts-node/register"],
    parallel:2
  },
  rerun: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    dryRun: false,
    paths: ["@rerun.txt"],
    require: [
      "src/test/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    format: [
      "progress-bar",
      "html:reports/rerun-report.html",
      "json:test-results/rerun-report-rerun.json",
      "rerun:@rerun.txt"
    ],
    requireModule: ["ts-node/register"],
    // parallel: 1 
  }
};