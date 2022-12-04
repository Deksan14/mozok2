import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/random.css";

const RandomQuote = () => {
  let navigate = useNavigate();

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  //https://breakingbadapi.com/documentation
  // https://www.breakingbadapi.com/api/quote/random

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/quote/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.quote);
        setAuthor(quote.author);
        console.log(quote);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("https://www.breakingbadapi.com/api/quote/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote[0].quote);
        setAuthor(quote[0].author);
      });
  };

  return (
    <div className="Main">
      <nav>
        <button
          className="btn-2"
          onClick={() => {
            navigate("/");
          }}
        >
          Table with quotes
        </button>
      </nav>
      <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <button className="btn" onClick={fetchNewQuote}>
        Get Random Quote
      </button>
    </div>
  );
};

export default RandomQuote;
