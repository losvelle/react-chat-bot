// import dependencies
const express = require("express");
const app = express();
require("dotenv").config();

// allow parsing on requested body
app.use(express.json())

// import routes for api
const watsonRoutes = require("./routes/api/watson");

// direct request to /api/watson to watson routes
app.use("/api/watson", watsonRoutes);

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is listening for connection in port: ", port);
});
