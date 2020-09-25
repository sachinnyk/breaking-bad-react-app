/* import React, { Component } from "react";

class Character extends Component {
  render() {
    return (
      <div className="character">
        <div className="character-container">
          <div className="character-front">
            <img src={this{character.img} alt="Character img" />
          </div>
          <div className="character-back">
            <p>
              <strong>Character Name:</strong>
              {this{character.name}
            </p>
            <p>
              <strong>Actor Name:</strong>
              {this{character.portrayed}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
 */
import React from "react";

function Character({ character }) {
  return (
    <div className="character">
      <div className="character-container">
        <div className="character-front">
          <img src={character.img} alt="Character img" />
        </div>
        <div className="character-back">
          <h1>{character.name}</h1>
          <p>
            <strong>Actor Name:</strong>
            {character.portrayed}
          </p>
          <p>
            <strong>Nick Name:</strong>
            {character.nickname}
          </p>
          <p>
            <strong>Status:</strong>
            {character.status}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Character;
