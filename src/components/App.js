import React from "react";
import SearchBar from "./SearchBar";
import google from "../apis/google";

class App extends React.Component {
  state = { information: [] };

  onTermSubmit = async (term) => {
    const response = await google.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ information: response.data.items });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
