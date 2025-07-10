const report = require("multiple-cucumber-html-reporter");

const startTime = new Date();
const startTimeStr = startTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }); // Adjust time zone if needed

// Simulate or retrieve your actual test end time
const endTime = new Date();
const endTimeStr = endTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "report for book cart",
  reportTitle: "Custom Report Title",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "saranay machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: startTimeStr },
      { label: "Execution End Time", value: endTimeStr },
    ],
  },
});
