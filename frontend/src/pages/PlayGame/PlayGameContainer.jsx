import { useLocation } from "react-router-dom";
import { useState } from "react";
import PlayGame from "./PlayGame";

function PlayGameContainer() {
    const [hintText, setHintText] = useState("Click for Hint");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const { state } = useLocation();
    console.log("Selected word:", state.wordSelected);

    function handleLetterClick(letter) {
        if (state?.wordSelected?.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    function handleHintClick() {
        const originalTextArray = state.wordSelected.toUpperCase().split('');
        const nextHint = originalTextArray.find(letter => !guessedLetters.includes(letter));
        if (nextHint) {
            setHintText(nextHint);
            setIsClicked(true);
        }
    }

    return (
        <PlayGame
            guessedLetters={guessedLetters}
            handleLetterClick={handleLetterClick}
            step={step}
            handleHintClick={handleHintClick}
            hintText={hintText}
            isClicked={isClicked}
            originalWord={state.wordSelected}
            wordDescription={state.wordDescription}
        />
    );
}

export default PlayGameContainer;
