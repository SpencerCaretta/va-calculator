// pull in the models
const db = require("../models");

// define the methods for estimatorController.js

module.exports = {
  // method that returns the appropriate rate based on year and claimant type
  findRate: function(req, res) {
    db.Rates
      .find( {
        effectiveDate: req.params.effectiveDate, 
        claimantType: req.params.claimantType
      } )
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  }
}
