import React from "react";
import Beer from "./components/Beer";
import "./components/beer.css";
const URL = "https://api.punkapi.com/v2/beers";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false,
    };
  }
  /*
need to make the beer.js component file 
*/
  async componentDidMount() {
    try {
      this.setState({
        isLoading: true,
      });
      const response = await fetch(URL);
      const data = await response.json();
      this.setState({
        beers: data,
        isLoading: false,
      });
    } catch {
      this.setState({
        isLoading: false,
      });
      console.error("I have failed");
    }
  }

  renderBeers() {
    if (this.state.isLoading) {
      return <h1>Loading</h1>;
    } else if (this.state.beers.length > 0) {
      return this.state.beers.map((beer) => {
        return <Beer singleBeer={beer} />;
      });
    } else {
      return <h1>No data</h1>;
    }
  }
  // this chunk is almost done check end of class video
  render() {
    return <ul className="list">{this.renderBeers()}</ul>;
  }
}

export default App;
