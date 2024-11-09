import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Img1 from "../../assets/Images/down.jpeg";

function Home({ handleClick , handleClick2 }) {
  return (
    <div className=" min-h-[70vh] flex justify-center items-center mt-5">
      <Card className="border dark:border-white m-5 w-auto max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center min-w-[250px]">HANGMAN - THE GAME</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row justify-between items-center p-5">
          <div className="flex flex-col w-full sm:w-1/2 space-y-4 sm:space-y-6">
            <Button className="m-4 py-2" onClick={handleClick}>
              Single Player
            </Button>
            <Button className="m-4 py-4" onClick={handleClick2}>
              Multi Player
            </Button>
          </div>
          <div className="w-full sm:w-1/2 mt-6 sm:mt-0 flex justify-center">
            <img src={Img1} alt="Hangman Game" className="w-full max-w-[250px] h-auto" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
