const sequelize = require('../config/connection');
const { User, Event } = require('../models');
// add Location and Event into the object like this { User, Location, Event }

const userData = require('./userData.json');
// const locationData = require('./locationData.json');
const eventData = require('./eventData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Event.bulkCreate(eventData);



    process.exit(0);
}

seedDatabase();