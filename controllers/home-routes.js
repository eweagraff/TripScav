const router = require("express").Router();
const sequelize = require("../config/connection");
const { Site, User } = require("../models");
// const withAuth = require('../utils/auth');

//Starts us on homepage by default
router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

// Goes to Login page when click Login If logged in redirect to path and stop function otherwise render the login.handlebars template form to body
router.get("/login", (req, res) => {
  console.log("\n=======================================");
  console.log("\n++++++++++++LOGIN CLICKED ON HOMEPAGE+++++++++++++");
  console.log("\n=======================================");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Renders signup.handlebars template form to main.handlebars body
router.get("/signup", (req, res) => {
  console.log("\n=======================================");
  console.log("\n++++++++++++SIGN UP CLICKED ON HOMEPAGE+++++++++++++");
  console.log("\n=======================================");
  res.render("signup");
});

// router.get('/', withAuth, async (req, res) => {
//   try {
//     // Get all events and JOIN with user data
//     const siteData = await Site.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name', 'email'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const events = siteData.map((event) => event.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', {
//       events,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
