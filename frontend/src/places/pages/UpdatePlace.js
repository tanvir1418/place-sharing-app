import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Shat Gambuj Mosque",
    description:
      "Shat Gambuj Masjid or the Sixty Dome Mosque resides in the city of mosque, Bagerhat of Khulna division. It’s the largest mosque in Bangladesh and registered under the UNESCO World Heritage Site.",
    imageUrl:
      "https://www.gosahin.com/go/p/j/1577910315_sixty-dome-moque-1.jpg",
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
    imageUrl: "https://live.staticflickr.com/4228/34129364493_4b3e4bb0ba_b.jpg",
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
    imageUrl: "https://live.staticflickr.com/65535/7707182500_947e915528_b.jpg",
    address: "Ahsanullah Rd, Dhaka 1100",
    creator: "u3",
    location: {
      lat: 23.7085915,
      lng: 90.4060074,
    },
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH()]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
