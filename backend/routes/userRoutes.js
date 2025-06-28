const express = require("express");
const { check } = require("express-validator");
const {
  registerUser,
  loginUser,
  getProfile
} = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Valid email required").isEmail(),
    check("password", "Min 6 characters").isLength({ min: 6 })
  ],
  registerUser
);

router.post(
  "/login",
  [
    check("email", "Valid email required").isEmail(),
    check("password", "Password required").exists()
  ],
  loginUser
);

router.get("/profile", auth, getProfile);

module.exports = router;
