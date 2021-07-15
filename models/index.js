const User = require("./user");
const Location = require('./location');
const Site = require('./site');

User.hasMany(Site, {
  foreignKey: "user_id",
});

Location.hasMany(Site, {
  foreignKey: "location_id",
});

Site.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Location, Site };
