import React from "react";
import { userInfo } from "../store/namePlayers";
import  {useStoreResults, useTimerStore}  from '../store/resultsQuiz';

const ResultQuiz = () => {
  const userStore = userInfo();
  const userName = userStore.user.name;
  const {correctAnswers, incorrectAnswers } = useStoreResults()
  const timeElapsed = useTimerStore((state) => state.timeElapsed);

  const TimerDisplay = () => {
    const timeElapsed = useTimerStore((state) => state.timeElapsed);
  
    return timeElapsed /1000
  };

  const resultsLevel = () => {
    if (correctAnswers > 8) {
      return {
        condition: "Felicitaciones, eres todo un Senior",
        imageName: "star3.png"
      };
    } else if (correctAnswers <= 8 && correctAnswers > 4) {
      return {
        condition: "Estás a buen camino",
        imageName: "star2.png"
      };
    } else {
      return {
        condition: "Sigue reforzando tus conocimientos",
        imageName: "star1.png"
      };
    }
  };
  const { condition, imageName } = resultsLevel();

  return (
    <>
    
      {/* #53205A */}
      <article className="bg-[#b34040ea] ">
        <section className="  w-full h-72  flex">
          <img
            className="h-36 mt-28 ml-9"
            src="/images/resultquiz.png"
            alt=""
          />
          <h2 className="text-4xl mt-36 ml-10 capitalize">{userName}</h2>
          
        </section>

        <section className="bg-[#bbb18c] rounded-t-[40px] h-screen border-[2px] border-black ">
          <h3 className=" flex text-2xl justify-center mt-5 ">Tus resultados:</h3>
          <p className=" flex text-black text-xl  justify-center mt-5 font-semibold">
            {condition}
          </p>
          <img className="h-10  flex mx-auto mt-5" src={`/images/${imageName}`} alt="" />
       <div className="flex gap-10  justify-center">
            <div className="flex-col ">
              <p className="text-2xl text-black">Correctas</p>
              <p className="bg-[#b34040ea] flex h-[180px] w-[120px]  rounded-[30px] items-center justify-center text-4xl">
                {correctAnswers}   
              </p>
            </div>
            <div>
              <div className="flex-col ">
                <p className="text-2xl text-black">Incorrectas</p>
                <p className="bg-red-800 flex h-[180px] w-[120px]  rounded-[30px] items-center justify-center text-4xl">
                  {incorrectAnswers}
                </p>
              </div>
            </div>
       </div>
       <a className=" w-[280px] mx-auto border-4 border-violet-900 rounded-[30px] justify-center flex mt-5 text-xl py-4 px-5" href="/quizCategory">Ir a inicio</a>
       <p className="text-xl">Timer {TimerDisplay(timeElapsed)}</p>  
        </section>
      </article>
      
    </>
  );
};

export default ResultQuiz;
