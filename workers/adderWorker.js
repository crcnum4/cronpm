const CronJob = require("cron").CronJob;

const addRandomNumbers = num => {
  const adderWorker = new CronJob(
    "* * * * * *",
    function() {
      this.stop();
      let total = 0;
      for (let i = 0; i < num; i++) {
        total += Math.floor(Math.random() * (101 - 10) + 10);
      }

      console.log(`total is ${total}`);
    },
    null,
    false,
    "America/New_York"
  );
  adderWorker.start();
};

module.exports = addRandomNumbers;
