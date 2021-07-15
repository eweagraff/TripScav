const router = require('express').Router();
const userRoutes = require("./userRoutes.js");
const postRoutes = require("./post-routes");



router.use('/users', userRoutes);
router.use('/post', postRoutes);


module.exports = router;