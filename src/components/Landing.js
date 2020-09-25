import React from "react";
import Character from "./Character";

function Landing(props) {
  return (
    <div className="container">
      {props.characters.map((character) => (
        <Character key={character.char_id} character={character} />
      ))}
    </div>
  );
}

export default Landing;
