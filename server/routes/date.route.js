const express = require("express");
const asyncHandler = require("express-async-handler");
const dateCtrl = require("../controllers/date.controller");

const router = express.Router();
module.exports = router;

router.route("/").get(asyncHandler(getNumbersInfo));

async function getNumbersInfo(req, res) {
  let numberInfo = await dateCtrl.getNumbersInfo(req.query.date)
  res.json(numberInfo)
}
