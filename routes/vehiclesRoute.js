const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controller/vehiclesController")

router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post('/vehicles', create);

module.exports = router;