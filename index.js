const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi, from express get route");
});

app.listen(3000, () => {
    console.log("The server is listening on Port 3000");
});