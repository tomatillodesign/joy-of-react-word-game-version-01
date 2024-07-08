import React from 'react';

export function GameEndBanner({ gameStatus, numGuesses, correctAnswer }) {

    console.log(gameStatus);
    console.log(numGuesses);

    return (
        <>
        { gameStatus === 'win' && (
        
            <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in
                { numGuesses > 1 && (
                    <><strong> {numGuesses} guesses</strong>.</>
                )}
                { numGuesses == 1 && (
                    <><strong> {numGuesses} guess</strong>!</>
                )}
            </p>
            </div>
        )
        }
        { gameStatus === 'lose' && (
            <div className="sad banner">
                <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
            </div>
        )}
        </>
      );

}
export default GameEndBanner;