import React, { useState, useEffect } from "react";
import "./Quotes.css";
import { useSelector, useDispatch } from "react-redux";
import logo from "./xld-icon-50.png";

const url = "https://api.quotable.io/random";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const users = useSelector((state) => state.users);

  console.log("users: ", users);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author } = quotes;
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />

      <h1
        style={{ fontSize: 38, color: "white", padding: 10, marginBottom: 80 }}
      >
        Hi, <span>{users.info.name}</span> Your Quotes for today!
      </h1>
      <div className="box-centerside">
        <div className="text">
          <p>{content}</p>
        </div>
        <div className="author">
          <h5>{author}</h5>
          <div className="button-container">
            <button className="twitter-button" onClick={tweetQuote}>
              <i className="fab fa-twitter"></i>
            </button>
            <button onClick={getNewQuote}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
