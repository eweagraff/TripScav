const sequelize = require('../config/connection');
const { User, Site } = require('../models');
// add Location and Event into the object like this { User, Location, Event }

const userData = require('./userData.json');
const locationData = require('./locationData.json');
const siteData = require('./siteData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Site.bulkCreate(siteData);

    await Location.bulkCreate(locationData);



    process.exit(0);
}

seedDatabase();