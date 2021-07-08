const router = require('express').Router();
const { Site, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all events and JOIN with user data
    const siteData = await Site.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
      ],
    });

    // Serialize data so the template can read it
    const events = siteData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      events, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;