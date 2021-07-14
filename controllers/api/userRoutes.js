const router = require('express').Router();
const { User } = require('../../models');

///DISABLED IT WAS USED TO get User array from api link
// router.get('/', (req, res) => {
//     User.findAll({
//         attributes: { exclude: ['[password'] }
//     })
//         .then(dbUserData => res.json(dbUserData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

//Create New Account
router.post('/', (req, res) => {
    console.log("\n=======================================");
    console.log("\n++++++++++++YOUR IN THE ACCOUNT CREATION ROUTE+++++++++++++");
    console.log("\n=======================================");
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
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


//Login Function
router.post('/login', (req, res) => {
    console.log("\n=======================================");
    console.log("\n++++++++++++YOUR IN THE LOGIN ROUTE+++++++++++++");
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
    console.log("\n++++++++++++YOUR IN THE LOGOUT ROUTE+++++++++++++");
    console.log("\n=======================================");
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }


});

module.exports = router;