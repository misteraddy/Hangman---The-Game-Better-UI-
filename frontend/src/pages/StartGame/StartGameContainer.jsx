import TextInputFormContainer from "@/components/TextInputForm/TextInputFormContainer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

function StartGameContainer() {
  return (
    <div>
      <div className="min-h-[70vh] flex justify-center items-center ">
        <Card className="dark:border-white h-60 w-96 border shadow-2xl">
          <CardTitle className="text-center mt-8">Start The Game</CardTitle>
          <CardContent className="mt-4">
            <TextInputFormContainer />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default StartGameContainer;
