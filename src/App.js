import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import MainContainer from "./components/MainContainer";
import TopNavbar from "./components/TopNavbar";
import characters from "./characters.json";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    clickedAlready: [] ,
    characters: characters,
    score: 0,
    topScore: 0,
    message: "Click any image to Start, Do not select more then once each game!"
  };
  // correctGuess increases the score by 1, Displays message, and if needed updates top score.
  correctGuess = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        message:"Correct Guess!",
        score: this.state.score + 1,
        topScore: this.state.score
      });
    }
    else {
      this.setState({
        message:"Correct Guess!",
        score: this.state.score + 1
      });
    }
  };
  // resetGame sets this.state.score to 0 and Displays message
  resetGame = () => {
    // Game reset display message and start new game.
    if(this.state.score >= this.state.topScore){
      this.setState({
        message: "Incorrect Guess!",
        topScore: this.state.score,
        score: 0,
        clickedAlready:[]
      });
    }
    else {
      this.setState({ 
        message: "Incorrect Guess!",
        score: 0,
        clickedAlready:[]
      });
    }

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

    if (this.state.clickedAlready.includes(id)) {
      this.resetGame();
    }
    else {
      let updatedClickArray = this.state.clickedAlready
      updatedClickArray.push(id);
      this.setState({clickedAlready: updatedClickArray }, () => this.correctGuess());
    }
  }
  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <div>
        <TopNavbar message={this.state.message} currentScore={this.state.score} topScore={this.state.topScore} />
        <MainContainer>
          {this.shuffleArray(this.state.characters).map(character => (
            <CharacterCard
              handleClick={this.handleClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
