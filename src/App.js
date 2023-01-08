import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😔": "sad",
  "😑": "annoyance",
  "😲": "disbelief",
  "🤩": "star-struck",
  "🥱": "yawning",
  "🎉": "party popper",
  "🥢": "chopsticks",
  "🥡": "takeout box",
  "🚀": "rocket"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (userInput === "") {
      var meaning = userInput;
      setMeaning(meaning);
    } else if (meaning === undefined) {
      meaning = "we dont have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside out</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
