import React from 'react';
import { userInfo } from '../store/namePlayers';
import { useStoreResults } from '../store/resultsQuiz';


const ResultQuiz = () => {

    const userStore = userInfo();
    const userName = userStore.user.name;
    const {correctAnswers, incorrectAnswers, setCorrectAnswers, setIncorrectAnswers } = useStoreResults()
    console.log(correctAnswers)
    console.log(incorrectAnswers)
    //console.log(incorrectAnswers)
  return (
    <div className='bg-violet-400'>
        <h2>{userName} tus resultados fueron: </h2>
      <h3 className='text-2xl'>Resultados del Quiz:</h3>
      <h4>Respuestas correctas {correctAnswers}</h4>
      <h4>Respuestas incorrectas {incorrectAnswers}</h4>
    </div>
  );
};

export default ResultQuiz;
