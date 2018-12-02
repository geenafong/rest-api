'use strict';

const express = require("express");
const router = express.Router();

// The User Routes
// GET /api/users 200 - Returns the currently authenticated user
router.get("/users", function (req, res) {
  res.json({response: "You sent me a GET request"});
})
// POST /api/users 201 - Creates a user, sets the Location header to "/", and returns no content
router.post("/users", function (req, res) {
    res.json({response: "You sent me a POST request",
    body: req.body
    })
});

module.exports = router;