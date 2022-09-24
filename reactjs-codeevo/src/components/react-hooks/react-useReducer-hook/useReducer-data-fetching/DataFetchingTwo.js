import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!!!",
      };

    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <>
      {state.loading ? <h1>Loading...</h1> : <h1>{state.post.title}</h1>}
      {state.error !== "" ? <h1>{state.error}</h1> : null}
    </>
  );
};

export default DataFetchingTwo;
