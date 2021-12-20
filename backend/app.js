const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes.js");

const app = express();

app.use("/api/places", placesRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000, () => {
  console.log("SERVER running at http://localhost:5000/");
});
