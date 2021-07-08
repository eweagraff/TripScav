const User = require("./user");
const Location = require('./location');
const Site = require('./Site');

User.hasMany(Site, {
  foreignKey: "user_id",
});

Location.hasMany(Site, {
  foreignKey: "location_id",
});

Site.belongsTo(Location, {
  foreignKey: "location_id",
});

module.exports = { User, Location, Site };
