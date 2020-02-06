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

// Routes for different repair descriptions

router.post("/v1/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/v1/repair-description-leak");
    } else {
      res.redirect("/v1/repair-description");
    }
  });

    // for version 2
// router.post("/v2/repair-description-answer", function(req, res) {
//     if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
//       res.redirect("/v2/repair-description-damp");
//     } else if (req.session.data["repair-location-kitchen"] === "Drip") {
//       res.redirect("/v2/repair-description-leak");
//     } else {
//       res.redirect("/v2/repair-description");
//     }
//   });



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

  router.post("/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/emergency-repair");
    } else if (req.session.data["repair-leak-electrics"] ===  "not-containable"){
      res.redirect("/emergency-repair");
    } else {
      res.redirect("/repair-description-leak-inside")
    }
  });

  router.post("/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "condensation") {
      res.redirect("/repair-damp");
    } else {
      res.redirect("/repair-description")
    }
  });


module.exports = router
