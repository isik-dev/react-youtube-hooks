import React from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import google from "../apis/google";

class App extends React.Component {
  state = { information: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await google.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      information: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
