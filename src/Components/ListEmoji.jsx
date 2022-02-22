import React, { Component } from "react";
import "./ListEmoji.css";
import Clipboard from "clipboard";

class ListEmoji extends Component {
  retrieveEmojis = (results) => {
    if (typeof results !== "object") results = [];
    return results?.map((emoji) => (
      <div
        className="emoji-row copy-to-clipboard"
        data-clipboard-text={emoji.symbol}
        key={emoji.title}
      >
        <img src={source(emoji.symbol)} alt={emoji.title} />
        <span className="title">{emoji.title}</span>
        <span className="copy">Click to copy emoji</span>
      </div>
    ));
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="emojis">{this.retrieveEmojis(this.props.newEmojis)}</div>
    );
  }
}

function source(symbol) {
  const codePointHex = symbol.codePointAt(0).toString(16);
  return `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
}

export default ListEmoji;
