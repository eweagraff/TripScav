const User = require("./user");
const Location = require('./location');
const Event = require('./event');

User.hasMany(Event, {
  foreignKey: "user_id",
});

Location.hasMany(Event, {
  foreignKey: "location_id",
});

Event.belongsTo(Location, {
  foreignKey: "location_id",
});

module.exports = { User, Location, Event };
