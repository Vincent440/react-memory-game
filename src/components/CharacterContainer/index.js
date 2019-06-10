import React, { Component } from "react";
import CharacterCard from "../CharacterCard";
import BootstrapDiv from "../BootstrapDiv";
import Navbar from "../Navbar";
import allCharacters from "./characters.json";


class CharacterContainer extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters:allCharacters,
    score:0,
    topScore:0,
    message:"Click to Start!"
  };

  // correctGuess increases the score by 1, Displays message, and if needed updates top score.
  correctGuess = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        message:"Correct Guess!",
        score: this.state.score + 1,
        topScore: this.state.topScore +1
      });
    }
    else{
      this.setState({
        message:"Correct Guess!",
        score: this.state.score + 1
      });
    }
  };
  // resetGame sets this.state.score to 0 and Displays message
  resetGame = () => {
    // Game reset display message and start new game.
    this.setState({ 
      message: "Incorrect Guess!",
      score: 0,
      characters: allCharacters
    });
  };

// Randomize the array so that it never appears the same. 
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleClick = id => {
    // ClickedCharacters filters the characters array from state to grab only that character's object that has been clicked
    const clickedCharacter = this.state.characters.filter(char => char.id === id);

    if (clickedCharacter[0].clicked) {
      this.resetGame();
    }
    else {

      const updatedCharacters = this.state.characters.map(character => {
        if(character.id === id){
          character.clicked = true;
          return character;
        }
        else {
          return character;
        }
      });

      this.setState({ characters : updatedCharacters });

      this.correctGuess();
    }
  }
  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <div>
        <Navbar message={this.state.message} currentScore={this.state.score} topScore={this.state.topScore}></Navbar>
        <BootstrapDiv>
          {this.shuffleArray(this.state.characters).map(character => (
            <CharacterCard
              handleClick={this.handleClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </BootstrapDiv>
      </div>
    );
  }
}

export default CharacterContainer;