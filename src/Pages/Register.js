import "./Register.css";
import logo from "./xld-icon-50.png";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/actions/users";
import DatePicker from "react-date-picker";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [Birthdate, setBirthdate] = useState(new Date());

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  function handleCick(type) {
    if (type === "user") {
      // props.setUserInfo({ name: 'bossROD' })
      dispatch(
        setUserInfo({
          name: name,
          email: email,
          mobile: mobile,
          Birthdate: Birthdate,
        })
      );
    }
    history.push("/Details");
  }

  let history = useHistory();

  console.log("users: ", users);

  return (
    <div className="register">
      <img src={logo} alt="logo" className="logo" />
      <form className="register_form">
        <h1 className="text">Welcome to XLD QUOTES!</h1>
        <div className="text_sub">Please Enter Your Details</div>
        <input
          type="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {/* <DatePicker onChange={setBirthdate} value={Birthdate} /> */}
        <input
          type="date"
          placeholder="Birthdate"
          value={Birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button
          type="submit"
          className="submit_btn"
          onClick={() => handleCick("user")}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Register;
