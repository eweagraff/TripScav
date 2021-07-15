const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    console.log("******************USER NOT AUTHORIZED******************************")
    res.redirect('/');
  } else {
    console.log("*****************USER AUTHORIZED*******************************")
    next();
  }
};

module.exports = withAuth;