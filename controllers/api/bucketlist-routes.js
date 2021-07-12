const router = require("express").Router();
const { Bucketlist } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/bucketlist", async (req, res) => {
  try {
    const bucketlistData = await Bucketlist.findAll();
    if (!bucketlistData) {
      res.status(404).json({ message: "No post found!" });
      return;
    }
    res.status(200).json(bucketlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/bucketlist", (req, res) => {
  res.render("bucketlist");
});
module.exports = router;
