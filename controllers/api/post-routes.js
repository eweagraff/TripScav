const router = require('express').Router();
const { Site, User, Location } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, (req, res) => {
    console.log("++++++++++++++IN THE GET GET GET +++++++++++");
    Site.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'site_name',
            'user_id',


        ],
        include: {
            include: {
                model: User,
                attributes: ['username']

            },


        }
    })
        .then(dbPostData => {

            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/search', (req, res) => {
    console.log("++++++++++++YOUR HITTING THE SEARCH ROUTE+++++++++");
    Site.create({
        site_name: req.body.site,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.delete('/:id', withAuth, (req, res) => {
    Site.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Site found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;