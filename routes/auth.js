import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

router.post("/", (req, res) => {
  res.send("Log in user");
});

export default router;
