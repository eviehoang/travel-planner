const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Traveller.hasOne(Trip, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
  });
  
  Trip.belongsTo(Traveller, {
    foreignKey: 'traveller_id',
  });
  
  Trip.hasMany(Location, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE',
  });
  
  Location.belongsTo(Trip, {
    foreignKey: 'trip_id',
  });

  module.exports = { Traveller, Trip, Location};