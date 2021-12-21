const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Shat Gambuj Mosque",
    description:
      "Shat Gambuj Masjid or the Sixty Dome Mosque resides in the city of mosque, Bagerhat of Khulna division. It’s the largest mosque in Bangladesh and registered under the UNESCO World Heritage Site.",
    address: "Bagerhat - Khulna Rd, 9300",
    creator: "u1",
    location: {
      lat: 22.6745068,
      lng: 89.7418359,
    },
  },
  {
    id: "p2",
    title: "Lalbagh Fort",
    description:
      "This famous historic place is situated on the northeast side of Dhaka, Bangladesh. This was built during the Mughal rule, on seventeenth century.",
    address: "Lalbagh Rd, Dhaka 1211",
    creator: "u2",
    location: {
      lat: 23.7188605,
      lng: 90.3881596,
    },
  },
  {
    id: "p3",
    title: "Ahsan Manzil",
    description:
      "This is the heritage building of the then jamindar of Jamalpur. It was built during the late eighteenth century by Sheik Enayet Ullah.",
    address: "Ahsanullah Rd, Dhaka 1100",
    creator: "u3",
    location: {
      lat: 23.7085915,
      lng: 90.4060074,
    },
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }

  res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;

  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
