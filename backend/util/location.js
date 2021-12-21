const axios = require("axios");

const HttpError = require("../models/http-error");

const API_KEY = "AIzaSyBbegHJ_Pou6C7FHrgyQYJgciWIKFWgTys";

async function getCoordsForAddress(address) {
  return {
    lat: 22.6745068,
    lng: 89.7418359,
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
