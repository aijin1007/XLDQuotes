import React from "react";
import "./Details.css";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../redux/actions/users";
import { useHistory } from "react-router-dom";

function Details() {
  let history = useHistory();

  const users = useSelector((state) => state.users);

  console.log("users: ", users);

  return (
    <div className="Details">
      <h1 style={{ fontWeight: "bold", marginBottom: "10px" }}>
        Please check your Personal Information
      </h1>
      <div>Name: {users.info.name}</div>
      <div>Email: {users.info.email}</div>
      <div>Mobile: {users.info.mobile}</div>
      <div>
        Birthdate: {new Date(users.info.Birthdate).toLocaleDateString()}
      </div>
      <button
        className="Details_button"
        onClick={() => history.push("/quotes")}
      >
        GO TO YOUR QUOTES
      </button>
    </div>
  );
}

export default Details;
