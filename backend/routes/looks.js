const express = require("express"); // Import Express
const router = express.Router(); // Create a router instance

// Import function to get look data
const {getAllLooks} = require("../data/lookData");

// Define route to get all looks
router.get("/",(req,res) => {
    const looks = getAllLooks(); // Retrieve all looks
    res.json(looks); // Send looks as JSON response
});

// Export the router to be used in server.js
module.exports = router;