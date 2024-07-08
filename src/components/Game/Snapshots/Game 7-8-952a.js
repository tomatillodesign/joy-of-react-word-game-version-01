import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  // const emptyGuesses = [];
  // range(NUM_OF_GUESSES_ALLOWED).map((num) => ( 
  //   emptyGuesses.push({ label: '', id: crypto.randomUUID() })
  // ));

  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);

  function onSubmit(event) {

    event.preventDefault();
    setGuess('');
    const updatedGuessList = [...guessList, {label: guess, id: crypto.randomUUID() }];
    setGuessList(updatedGuessList);

  }

  return (
  
    <>Put a game here! 😎

    { console.log(guessList) }

      <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p className="guess" key={index+1} data-key={index+1} id={`guess-row-${index+1}`}>
          { !guessList[index] ?
            <>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
            </>
                              :
            <>
              {guessList[index].label.split("").map((letter, letterIndex) => (
                <span className="cell" id={`guess-cell-${index+1}-${letterIndex+1}`} key={letterIndex+1}>{letter}</span>
              ))}
            </>
          }
        </p>
      ))}
      </div>

    <form 
      className="guess-input-wrapper"
      onSubmit={onSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text"
        required
        pattern="[A-Za-z]{5}"
        maxLength="5"
        value={guess.toUpperCase()}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>

    </>

  );
}

export default Game;
