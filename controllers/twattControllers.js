var twatt = require('../models/twatt');
module.exports = {
  getJson: (req, res) => {
    twatt(function(data) {
      res.send(data);
    })
  }
};
