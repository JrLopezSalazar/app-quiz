import React from "react";
import { userInfo } from "../store/namePlayers";
//import { useStoreResults } from '../store/resultsQuiz';

const ResultQuiz = ({ correctAnswers, incorrectAnswers }) => {
  const userStore = userInfo();
  const userName = userStore.user.name;
  //const {correctAnswers, incorrectAnswers, setCorrectAnswers, setIncorrectAnswers } = useStoreResults()
  //console.log(correctAnswers)
  //console.log(incorrectAnswers)

  return (
    <>
      <section className=" bg-[#b34040ea] w-full h-72 rounded-b-[40px] flex">
        <img className="h-36 mt-28 ml-9" src="/images/resultquiz.png" alt="" />
        <h2 className="text-4xl mt-36 ml-10 capitalize">{userName}</h2>
      </section>
        <h3 className="text-2xl">Tus resultados son:</h3>
      <section className="flex flex-wrap gap-8 mt-52">
        <div className="flex-col ">
          <p className="text-2xl text-white">Correctas</p>
          <p className="bg-green-800 flex h-[180px] w-[120px]  rounded-[30px] items-center justify-center text-4xl">{correctAnswers}</p>
        </div>
        <div>
        <div className="flex-col ">
          <p className="text-2xl text-white">Incorrectas</p>
          <p className="bg-red-800 flex h-[180px] w-[120px]  rounded-[30px] items-center justify-center text-4xl">{incorrectAnswers}</p>
        </div>
       
        </div>
      </section>
    </>
  );
};

export default ResultQuiz;
