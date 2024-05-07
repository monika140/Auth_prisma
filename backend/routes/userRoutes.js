const express = require("express");

const {
  createUser,
  updateUser,
  fetchUsers,
  showUser,
  deleteUser,
} = require("../Controller/UserController");

const router = express.Router();
router.get("/", fetchUsers);
router.get("/:id", showUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
