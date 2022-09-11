// GET REQUEST IN REACT JS
import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: "Error retrieving data",
        });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <>
        <h1>List of Posts</h1>
        {posts
          ? posts.map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
              </div>
            ))
          : ""}
        {errorMessage ? <h1>{errorMessage}</h1> : ""}
      </>
    );
  }
}

export default PostList;
