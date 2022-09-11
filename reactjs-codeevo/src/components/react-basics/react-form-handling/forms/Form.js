// BASIC FORM HANDLING IN REACT JS
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comments: "",
      topics: "react",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topics: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topics}`);
    event.preventDefault();
  };

  render() {
    const { userName, comments, topics } = this.state;
    return (
      <>
        <h1>BASIC FORM</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name : </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="comments">Comments : </label>
            <textarea
              type="text"
              name="comments"
              id="comments"
              rows="3"
              columns="3"
              value={comments}
              onChange={this.handleCommentsChange}
            />
          </div>
          <div>
            <label htmlFor="topics">Topic : </label>
            <select
              id="topics"
              value={topics}
              onChange={this.handleTopicChange}
            >
              <option value="react">React JS</option>
              <option value="angular">Angular</option>
              <option value="veu">Veu JS</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
