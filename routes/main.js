// Create a new router
const express = require("express");
const path = require("path"); //html task 12 path.
const router = express.Router();

// Handle the main routes

// This is the Homepage route
router.get("/", (req, res) => res.send("Hello World!"));

// This is the About route
router.get("/about", (req, res) => {
  res.send("<h1>This is the about page</h1>");
});

// This is the Contact route
router.get("/contact", (req, res) => {
  res.send("You can feel free to contact me at david.raja@example.com or call +44 71234 56789");
});

// This is the Date route
router.get("/date", (req, res) => {
  const now = new Date();
  res.send(`Current date and time: ${now.toLocaleString()}`);
});
//route with full name
router.get("/welcome/:name", (req, res) => {
    const rawName = req.params.name;

//Convert the dashes to spaces and make each word capitals
const formattedName = rawName
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

res.send(`<h1>Welcome ${formattedName}</h1>`);
});
// chained route handlers 
router.get("/chain", 
    (req, res, next) => {
        console.log("First handler is executed");
        req.message = "Hello, this is from the first handler!";
        next();
    },
    (req, res) => {
        console.log("Second handler is executed");
        res.send(`<h1>${req.message} Now from second handler.</h1>`);
    }
);
//Route send html file
router.get("/file", (req, res) => {
    res.sendFile(path.join(__dirname, "../a.html"));
});

// Export router object so index.js can access
module.exports = router;