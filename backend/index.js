const express = require("express");
const app = express();

// Imports for PCeaT
const pceatController = require("./controllers/pceatController");

// Endpoints for PCeaT
app.get("/pceat/processtime", pceatController.processTime);

// Endpoints for Project 2

// Endpoints for Project 3

app.listen(6969, () => console.log("Server is running"));
