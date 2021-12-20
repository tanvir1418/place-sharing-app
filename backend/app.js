const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes.js");

const app = express();

app.use("/api/places", placesRoutes);

app.listen(5000, () => {
  console.log("SERVER running at http://localhost:5000/");
});
