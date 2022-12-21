import React, { useState } from "react";
import "./styles.css";

let emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤪": "Zany Face",
  "😴": "Sleeping Face",
  "🐕": "Dog"
};

let emojiWeknow = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setmeaning] = useState(" ");
  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <div className="item">
        <h1>Welcome to the Emoji Interpreter</h1>
        <input placeholder="Search emoji here" onChange={emojiInputHandler} />
        <h2> {meaning}</h2>
        <h3> emoji We know</h3>
      </div>
      {emojiWeknow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
