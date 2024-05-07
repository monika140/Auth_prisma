const express = require("express");
const UserRoutes = require("./userRoutes");

const router = express.Router();

router.use("/api/user", UserRoutes);
module.exports = router;
