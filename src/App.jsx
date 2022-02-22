import "./App.css";
import emojiList from "./Components/emojiList.json";
import React, { Component } from "react";
import ListEmoji from "./Components/ListEmoji";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredSearch: filterEmoji(""),
    };
  }
  handleSearchChange = (value) => {
    this.setState({
      filteredSearch: filterEmoji(value),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <ListEmoji newEmojis={this.state.filteredSearch} />
      </div>
    );
  }
}

function Header() {
  return (
    <div className="header">
      <h1>😂 Emoji Search 🤡</h1>
    </div>
  );
}

class SearchInput extends Component {
  handleChange = (event) => {
    this.props.textChange(event.target.value);
  };
  render() {
    return (
      <div className="search-bar">
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

function filterEmoji(searchText) {
  return emojiList
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase()))
        return true;
      if (emoji.keywords.includes(searchText)) return true;
      return false;
    })
    .slice(0, 99);
}

export default App;
