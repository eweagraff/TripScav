const router = require('express').Router();
const { User } = require('../../models');

///Enabled to get User array from api link
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['[password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Create New Account
router.post('/', (req, res) => {
    console.log("\n=======================================");
    console.log("\n++++++++++++YOUR IN THE ACCOUNT CREATION FUNCTION+++++++++++++");
    console.log("\n=======================================");
     User.create({
      username: req.body.username,
      password: req.body.password,
      email:req.body.email
  })

      .then(dbUserData => {
          req.session.save(() => {
              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.email = dbUserData.email;
              req.session.loggedIn = true;

              res.json(dbUserData);
              
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});



// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.username = userData.username
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//Login Function
router.post('/login', (req, res) => {
    console.log("\n=======================================");
    console.log("\n++++++++++++YOUR IN THE LOGIN FUNCTION+++++++++++++");
    console.log("\n=======================================");
  User.findOne({
      where: {
          username: req.body.username
      }
  }).then(dbUserData => {
      if (!dbUserData) {
          res.status(400).json({ message: 'No user with that username!' });
          return;
      }
      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
      }
      req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;

          res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
  })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.post('/logout', (req, res) => {
    console.log("\n=======================================");
    console.log("\n++++++++++++YOUR IN THE LOGOUT FUNCTION+++++++++++++");
    console.log("\n=======================================");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }



// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

});

module.exports = router;