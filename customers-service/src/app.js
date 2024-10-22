const express = require("express");
const customerRoutes = require("./customer/routes");
const app = express();

// Use JSON middleware
app.use(express.json());

// Load customer routes
app.use("/", customerRoutes);

module.exports = app;
