const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Route for following up prior repairs
router.post("/prior-repair-answer", function(req, res) {
    if (req.session.data["prior-repair"] === "Yes") {
      res.redirect("/special-diagnosis");
    } else {
      res.redirect("/repair-location");
    }
  });


// Routes for emergency repairs

router.post("/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/repair-location");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/smell-gas");
    } else {
        res.redirect("/emergency-repair");

    }
  });

// Routes for different repair descriptions

router.post("/repair-location-kitchen-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp") {
      res.redirect("/repair-damp");
    } else {
      res.redirect("/repair-description");
    }
  });


module.exports = router
