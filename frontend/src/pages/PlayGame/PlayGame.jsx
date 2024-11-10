import HangMan from "@/components/HangMan/HangMan";
import LetterButtons from "@/components/LetterButtons/LetterButtons";
import Maskedtext from "@/components/MaskedText/Maskedtext";
import Modal from "@/components/Modal/Modal";
import { Button } from "@/components/ui/button";


function PlayGame({ guessedLetters, handleHintClick, step, handleLetterClick, hintText, isClicked, originalWord, wordDescription }) {
    return (
        <div className="border dark:border-white flex flex-col md:flex-row p-6 shadow-2xl md:m-20 xs:m-0 rounded-lg xs:min-h-full">
            <div className="flex-1 space-y-4">
                <h1 className="text-xl font-semibold mb-4">{wordDescription}</h1>
                
                <div className="p-4 rounded-lg">
                    <Maskedtext text={originalWord} guessedLetters={guessedLetters} />
                </div>

                <div className="mt-4">
                    <LetterButtons text={originalWord} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
                </div>

                <Button
                    onClick={handleHintClick}
                    variant="destructive"
                    className="mt-4 xs:mt-1 w-full font-medium py-2 xs:py-1 px-4 xs:mr-8 rounded-lg"
                >{hintText}</Button>
            </div>

            <div className="flex-1 flex justify-center items-center mt-6 md:mt-0 ">
                <HangMan step={step} />
            </div>

            <Modal guessedLetters={guessedLetters} step={step} text={originalWord} />
        </div>
    );
}

export default PlayGame;
