const express = require("express");

const router = express.Router();

const authRoutes = require("./AuthRoutes");

router.use("/", authRoutes);

module.exports = router;