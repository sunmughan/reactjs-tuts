// FETCHING DATA WITH USE REDUCER HOOK
import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  let initialState = {};

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState(initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res);
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPost({});
        setError("Something went wrong!!!");
      });
  }, []);

  return (
    <>
      {loading ? <h1>Loading...</h1> : <h1>{post.title}</h1>}
      {error !== "" ? <h1>{error}</h1> : null}
    </>
  );
};

export default DataFetchingOne;
