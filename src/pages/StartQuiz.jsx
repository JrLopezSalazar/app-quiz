import React from "react";
import { axiosQuiz } from "../config/apiConfig";

const StartQuiz = ({selectedLevel, selectedCategory}) => {

    axiosQuiz(`${selectedLevel}`)

    console.log(selectedLevel)
    console.log(selectedCategory)
  return (
    <section className="bg-[#b34040ea] h-screen" >
      <h3>cual es el peso atomico</h3>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </section>
  );
};

export default StartQuiz;
