import React, { Component } from "react";
import CharacterCard from "../CharacterCard";
import BootstrapContainer from "../BootstrapContainer";
import Title from "../Title";
import characters from "./characters.json";

class CharacterContainer extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  clickedCharacter = id => {
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <div>
        <Title>React Reaction Clicker Game</Title>
        <BootstrapContainer>
          {this.state.characters.map(character => (
            <CharacterCard
              clickedCharacter={this.clickedCharacter}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </BootstrapContainer>
      </div>
    );
  }
}

export default CharacterContainer;


// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }
// }