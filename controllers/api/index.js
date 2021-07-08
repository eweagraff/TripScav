const router = require('express').Router();
const userRoutes = require("./userRoutes");




router.use('/userRoutes', userRoutes);

module.exports = router;