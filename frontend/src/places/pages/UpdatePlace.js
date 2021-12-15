import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
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
  const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
