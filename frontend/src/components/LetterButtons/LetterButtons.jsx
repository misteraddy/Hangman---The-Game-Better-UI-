import { Button } from "@/components/ui/button"; 

const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({ text, guessedLetters, onLetterClick }) {
    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = (letter) => {
        if (guessedLettersSet.has(letter)) {
            return originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500';
        } else {
            return 'bg-blue-500 dark:bg-gray-500';
        }
    };

    function handleLetterClick(event) {
        const characterOfTheLetter = event.currentTarget.value;
        onLetterClick?.(characterOfTheLetter);
    }

    const buttons = ALPHABETS.map((letter) => (
        <Button
            key={`button-${letter}`}
            value={letter}
            onClick={handleLetterClick}
            disabled={guessedLettersSet.has(letter)}
            className={`h-12 w-12 xs:h-6 xs:w-6 m-1 text-white rounded-md ${buttonStyle(letter)}`}
        >
            {letter}
        </Button>
    ));

    return <>{buttons}</>;
}

export default LetterButtons;
