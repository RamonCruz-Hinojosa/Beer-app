import React, { Component } from "react";
import "./beer.css";

class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };

    console.log("heres the props!", props);
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    return (
      <li className="listitem">
        <img
          className="beer"
          src={this.props.singleBeer.image_url}
          alt={this.props.singleBeer.name}
        />
        <h2 className={this.state.liked ? "color" : ""}>
          {this.props.singleBeer.name}
        </h2>
        <button className="like" onClick={this.handleClick}>
          Like
        </button>
      </li>
    );
  }
}

export default Beer;
