// FETCHING DATA USING USE EFFECT HOOK IN REACT JS
import React, { useState, useEffect } from "react";
import axios from "axios";

// GET ALL HTTP REQUEST
// const DataFetching = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log(res);
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// GET ONE HTTP REQUEST
// FETCH VALUE ON BUTTON CLICK
const DataFetching = () => {
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <>
      <input
        type={"text"}
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handleClick}>Fetch Data</button>
      <h1>{post.title}</h1>
    </>
  );
};

export default DataFetching;
