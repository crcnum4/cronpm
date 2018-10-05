const CronJob = require("cron").CronJob;

const mainWorker = new CronJob(
  "*/5 * * * * *",
  function() {
    console.log("you will see this message ever 5 seconds in the console");
  },
  null,
  false,
  "America/New_York"
);

module.exports = mainWorker;
