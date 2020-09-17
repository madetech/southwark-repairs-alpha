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

  // for version 4
router.post("/v4/prior-repair-answer", function(req, res) {
    if (req.session.data["/v4/prior-repair"] === "Yes") {
      res.redirect("/v4/last-report");
    } else {
      res.redirect("/v4/repair-location");
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


  // for version 4
router.post("/v4/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/v4/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/v4/smell-gas");
    } else {
        res.redirect("/v4/emergency-repair");

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

//// Routes for repair descriptions drilldowns

 /// for version 1

    router.post("/v1/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/v1/repair-description-leak");
    } else {
      res.redirect("/v1/repair-description");
    }
  });

  // V1: Damp or mould
    router.post("/v1/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/v1/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/v1/repair-description-damp-mold");
    } else {
      res.redirect("/v1/repair-description")
    }
  });

  // V1: Drip or leak
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

 /// for version 2

    router.post("/v2/repair-location-answer", function(req, res) {
     if (req.session.data["repair-location"] === "External repair") {
      res.redirect("/v2/repair-description");
    } else {
      res.redirect("/v2/repair-type");
      }
    });

 /// for version 3

    router.post("/v3/repair-description-answer", function(req, res) {
     if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/v3/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/v3/repair-description-leak");
    } else {
      res.redirect("/v3/repair-description");
    }
  });
 
  // V3: Damp or mould
    router.post("/v3/repair-description-damp-answer", function(req, res) {
     if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/v3/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/v3/repair-description-damp-mold");
    } else {
      res.redirect("/v3/repair-description")
    }
  });

  // V3: Drip or leak
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

 /// for version 4

   router.post("/v4/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/v4/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/v4/repair-description-leak");
    } else if (req.session.data["repair-location-kitchen"] === "Cupboards") {
      res.redirect("/v4/repair-cupboard-type");
    } else if (req.session.data["repair-location-kitchen"] === "Electrical") {
      res.redirect("/v4/repair-description-electrical");
    } else if (req.session.data["repair-location-kitchen"] === "Heating") {
      res.redirect("/v4/repair-description-heating-water");
    } else {
      res.redirect("/v4/repair-description");
    }
  });

  // V4: Cupboard or worktop
   router.post("/v4/repair-description-cupboard-answer", function(req, res) {
    if (req.session.data["repair-description"] === "other-cupboard") {
      res.redirect("/v4/repair-description-cupboard");
    } else {
      res.redirect("/v4/repair-description")
    }
  });

  // V4: Electrical
   router.post("/v4/repair-description-electrical-answer", function(req, res) {
     if (req.session.data["repair-description"] === "carbon-monoxide") {
      res.redirect("/v4/repair-description-electrical-carbon-monoxide-alarm");
    } else if (req.session.data["repair-description"] === "smoke-detector") {
      res.redirect("/v4/repair-description-electrical-smoke-alarm");
    } else {
      res.redirect("/v4/repair-description")
    }
  });

  // V4: Heating or hot water
   router.post("/v4/repair-description-heating-water-answer", function(req, res) {
    if (req.session.data["repair-description"] === "no-heating-or-hot-water") {
      res.redirect("/v4/repair-description-heating-water-emergency");
    } else {
      res.redirect("/v4/repair-description")
    }
  });

// V4: Damp or mould
   router.post("/v4/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/v4/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/v4/repair-description-leak");
    } else if (req.session.data["repair-location-kitchen"] === "Cupboards") {
      res.redirect("/v4/repair-cupboard-type");
    } else {
      res.redirect("/v4/repair-description");
    }
  });


  router.post("/v4/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/v4/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/v4/repair-description-damp-mold");
    } else {
      res.redirect("/v4/repair-description")
    }
  });


  // V4: Drip or leak
   router.post("/v4/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/v4/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/v4/emergency-repair");
    } else {
      res.redirect("/v4/repair-description")
    }
  });


  router.post("/v4/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/v4/repair-leak-description-electrics-emergency");
    } else if (req.session.data["repair-leak-electrics"] === "non-containable"){
      res.redirect("/v4/repair-leak-description-electrics-emergency");
    } else {
      res.redirect("/v4/repair-description-leak-inside")
    }
  });

  router.post("/v4/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "pipe") {
      res.redirect("/v4/repair-description");
    } else {
      res.redirect("/v4/repair-description")
    }
  });

// Routes for tracking repairs

  // V5: Communal repairs
   router.post("/v5/communal-or-private-property-answer", function(req, res) {
    if (req.session.data["communal"] === "yes") {
      res.redirect("/v5/communal-repair-postcode");
    } else {
      res.redirect("/v5/postcode")
    }
  });

module.exports = router
