import React, { useState, useEffect } from "react";
import axios from "axios";

/*

const url = useFetch("https://api.agify.io/?name=walters");

function useFetch(url) {
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setAge(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  console.log(age);
  return { age, loading, error };
}

export default useFetch;
*/

/*
const AgePredict = () => {
  const [age, setAge] = useState([]);

  useEffect(() => {
    fetch("https://api.agify.io/?name=dejan")
      .then((data) => data.json())
      .then((data) => setAge(data));
  }, []);

  console.log(AgePredict);
};

export default AgePredict;
*/
