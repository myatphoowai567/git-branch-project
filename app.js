const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

// NEW FEATURE (LOGIN)
app.get("/login", (req, res) => {
    res.send("Login Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});