var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_Name, cb) {
    orm.insertOne(burger_Name, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (BurgersController.js).
module.exports = burger;
