const axios = require("axios");

const HttpError = require("../models/http-error");

const API_TOKEN = process.env.MAPBOX_API_TOKEN;

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?limit=2&access_token=${API_TOKEN}`
  );
  const data = response.data.features[0].center;

  if (!data) {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }

  const longitude = data[0];
  const latitude = data[1];

  return {
    lat: latitude,
    lng: longitude,
  };

  // billing enable is needed for this geocoding API access

  //   const response = await axios.get(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //       address
  //     )}&key=${API_KEY}`
  //   );

  //   const data = response.data;

  //   console.log(data);

  //   if (!data || data.status === "ZERO_RESULTS") {
  //     const error = new HttpError(
  //       "Could not find location for the specified address.",
  //       422
  //     );
  //     throw error;
  //   }

  //   const coordinates = data.results[0].geometry.location;

  //   return coordinates;
}

module.exports = getCoordsForAddress;
