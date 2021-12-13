import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "ui",
      name: "Tanvir Ahmed",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw29m1LgIUV8gGcX8fuNYs2K&ust=1639482569652000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNji7tba4PQCFQAAAAAdAAAAABAD",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
