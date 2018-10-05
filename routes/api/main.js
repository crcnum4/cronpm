const express = require("express");
const router = express.Router();
const mainWorker = require("../../workers/mainWorker");
const addRandomNumbers = require("../../workers/adderWorker");

router.get("/", (req, res) => res.json({ status: "main route" }));

router.get("/start", (req, res) => {
  if (mainWorker.running) {
    return res.json({ status: "worker already running" });
  }
  mainWorker.start();
  res.json({ status: "started worker" });
});

router.get("/stop", (req, res) => {
  if (!mainWorker.running) {
    return res.json({ status: "Worker not running" });
  }
  mainWorker.stop();
  res.json({ status: "stopped worker" });
});

router.get("/adder/:num", (req, res) => {
  addRandomNumbers(parseInt(req.params.num, 10));
  res.json({ status: "check console for result" });
});

module.exports = router;
