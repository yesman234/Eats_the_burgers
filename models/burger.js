var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("Burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("Burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("Burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("Burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (BurgersController.js).
module.exports = burger;
