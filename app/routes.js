const express = require('express')
const router = express.Router()




// Route for following up prior repairs
router.post("/v1/prior-repair-answer", function(req, res) {
    if (req.session.data["/v1/prior-repair"] === "Yes") {
      res.redirect("/v1/last-report");
    } else {
      res.redirect("/v1/repair-location");
    }
  });

  // for version 2
  router.post("/v2/prior-repair-answer", function(req, res) {
    if (req.session.data["/v2/prior-repair"] === "Yes") {
      res.redirect("/v2/last-report");
    } else {
      res.redirect("/v2/repair-type");
    }
  });

  // for version 3
router.post("/v3/prior-repair-answer", function(req, res) {
    if (req.session.data["/v3/prior-repair"] === "Yes") {
      res.redirect("/v3/last-report");
    } else {
      res.redirect("/v3/repair-location");
    }
  });


  // Routes for emergency repairs
router.post("/v1/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/v1/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/v1/smell-gas");
    } else {
        res.redirect("/v1/emergency-repair");

    }
  });

  // for version 3
router.post("/v3/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/v3/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/v3/smell-gas");
    } else {
        res.redirect("/v3/emergency-repair");

    }
  });

//Routes for leaseholder
router.post("/v2/leaseholder-answer", function(req, res) {
  if (req.session.data["is-leaseholder"] === "yes") {
    res.redirect("/v2/repairs-leaseholder");
  } else  {
    res.redirect("/v2/postcode");
  }
});


// Routes for repair location 
router.post("/v3/repair-location-answer", function(req, res) {
    if (req.session.data["/v3/repair-location"] === "Bathroom") {
      res.redirect("/v3/repair-type-bathroom");
    } else {
      res.redirect("/v3/repair-type");
    }
  });

// Routes for kitchen repair descriptions drilldowns

router.post("/v1/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/v1/repair-description-leak");
    } else {
      res.redirect("/v1/repair-description");
    }
  });

  router.post("/v1/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/v1/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/v1/repair-description-damp-mold");
    } else {
      res.redirect("/v1/repair-description")
    }
  });

  router.post("/v1/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/v1/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/v1/emergency-repair");
    } else {
      res.redirect("/v1/repair-description")
    }
  });

router.post("/v1/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/v1/emergency-repair");
    } else if (req.session.data["repair-leak-electrics"] ===  "not-containable"){
      res.redirect("/v1/emergency-repair");
    } else {
      res.redirect("/v1/repair-description-leak-inside")
    }
  });

  router.post("/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "condensation") {
      res.redirect("/v1/repair-damp");
    } else {
      res.redirect("/v1/repair-description")
    }
  });

    // for version 2
    router.post("/v2/repair-location-answer", function(req, res) {
      if (req.session.data["repair-location"] === "External repair") {
        res.redirect("/v2/repair-description");
      } else {
        res.redirect("/v2/repair-type");
      }
    });

   // for version 3
router.post("/v3/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/v3/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/v3/repair-description-leak");
    } else {
      res.redirect("/v3/repair-description");
    }
  });


  router.post("/v3/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/v3/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/v3/repair-description-damp-mold");
    } else {
      res.redirect("/v3/repair-description")
    }
  });


  router.post("/v3/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/v3/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/v3/emergency-repair");
    } else {
      res.redirect("/v3/repair-description")
    }
  });


  router.post("/v3/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/v3/repair-leak-description-electrics-emergency");
    } else if (req.session.data["repair-leak-electrics"] === "non-containable"){
      res.redirect("/v3/repair-leak-description-electrics-emergency");
    } else {
      res.redirect("/v3/repair-description-leak-inside")
    }
  });

  router.post("/v3/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "pipe") {
      res.redirect("/v3/repair-description");
    } else {
      res.redirect("/v3/repair-description")
    }
  });


module.exports = router
