import React, { useEffect, useState } from "react";
import { getQuizByName, getQuizByNameAndLevel } from "../services/quiz";
import { useStore } from '../store/categories';
import ResultQuiz from './ResultQuiz'; // Importa el componente ResultQuiz
import { useNavigate } from "react-router-dom";
import  {useStoreResults, useTimerStore}  from "../store/resultsQuiz";


const StartQuiz = () => {
  const { selectedCategory, selectedLevel } = useStore();
  const [categories, setCategories] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const {correctAnswers, incorrectAnswers, setCorrectAnswers, setIncorrectAnswers } = useStoreResults();
  const startTimer = useTimerStore((state) => state.startTimer);
  const [questions, setQuestions] = useState([]);
  //console.log(selectedCategory)
  

  useEffect(() => {
    if (selectedCategory && selectedLevel) {
      getQuizByNameAndLevel(selectedCategory, selectedLevel)
        .then(data => {
          setQuestions(data);
          //console.log("Data del cuestionario:", data);
        })
        .catch(error => {
          console.error('Error al obtener datos del cuestionario:', error);
        });
    } else {
      console.error('selectedCategory o selectedLevel es nulo');
    }
  }, [selectedCategory, selectedLevel]);
  
  // Agregar este useEffect para verificar el estado actualizado de questions
  useEffect(() => {
    //console.log("State de questions:", questions);
  }, [questions]);
  
  
  

  

  //la funcion de abajo esta comentada por si falla

 
  // useEffect(() => {
  //   if (selectedCategory) {
  //     getQuizByName(selectedCategory)
  //       .then(data => {
  //         setCategories(data);
  //       })
  //       .catch(error => {
  //         console.error('Error al obtener datos:', error);
  //       });
  //   }
  // }, [selectedCategory]);

  useEffect(() => {
    const interval = startTimer(); // Inicia el cronómetro al montar el componente
    return () => {
      // Detiene el cronómetro cuando el componente se desmonta
      useTimerStore.getState().stopTimer(interval);
    };
  }, []);

  


  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  //   // Verifica si la opción seleccionada es la correcta y actualiza el estado de respuestas correctas e incorrectas
  //   if (option === categories[0]?.levels[0]?.questions[currentQuestionIndex]?.correctAnswer) {
  //     setCorrectAnswers(correctAnswers + 1); // Actualiza el estado sumando 1 al estado anterior
  //   } else {
  //     setIncorrectAnswers(incorrectAnswers + 1); // Actualiza el estado sumando 1 al estado anterior
  //   }
  //   // Pasa a la siguiente pregunta
  //   const nextQuestionIndex = currentQuestionIndex + 1;
  //   setCurrentQuestionIndex(nextQuestionIndex);
  //   // Verifica si se ha llegado al final del cuestionario y navega a la página de resultados
  //   if (nextQuestionIndex === categories[0]?.levels[0]?.questions.length) {
  //     navigate('/resultquiz');
  //   }
  // };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    
    if (currentQuestionIndex < questions.length) {
      if (option === questions[currentQuestionIndex]?.correctAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
      
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);
    
      if (nextQuestionIndex === questions.length) {
        navigate('/resultquiz');
      }
    }
  };
  

 // const progress = categories.length > 0 ? ((currentQuestionIndex + 1) / categories[0]?.levels[0]?.questions.length) * 100 : 0;
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0; // Usamos questio
  // useEffect(() => {
  //   if (currentQuestionIndex === categories[0]?.levels[0]?.questions.length) {
  //     navigate('/resultquiz');
  //   }
  // }, [currentQuestionIndex, categories, navigate]);

//funcion de abajo no deja renderizar

  useEffect(() => {
    if (currentQuestionIndex === questions.length) { // Usamos questions en lugar de categories
      console.log(currentQuestionIndex)
      console.log(questions)
      //navigate('/resultquiz');
    }
  }, [currentQuestionIndex, questions]);
   

  useEffect(() => {
    //console.log("Correctas:", correctAnswers);
    //console.log("Incorrectas:", incorrectAnswers);
  }, [correctAnswers, incorrectAnswers]);

  


  return (
    <>
      <section className="bg-[#b34040ea] h-screen flex flex-col items-center">
        {/* Progreso del cuestionario */}
        {currentQuestionIndex < questions.length && (
          <div className="progress-bar border-4 flex ml-0 h-1 w-full bg-neutral-200 dark:bg-neutral-600" style={{ width: `${progress}%` }}></div>
        )}

        {currentQuestionIndex < questions.length && (
          <h3 className="text-3xl text-white mt-20 mb-5">Categoría: {selectedCategory}</h3>
        )}

        {/* Renderiza las preguntas y opciones */}
        {questions.length > 0 && currentQuestionIndex < questions.length && (
          <div className="flex flex-col text-xl justify-center mt-28">
            <h4 className="mb-24">Pregunta {currentQuestionIndex + 1}</h4>
            <p>{questions[currentQuestionIndex]?.question}</p>
            <ul className="flex flex-col gap-7 mx-auto">
            {(questions[currentQuestionIndex]?.opciones || questions[currentQuestionIndex]?.options)?.map((option, index) => (
                <li className="bg-[#7f569e] border-black border w-[380px] h-[120px] rounded-[30px] shadow-md border-r-4 border-b-4 flex justify-center items-center" key={index}>
                  <input className="sr-only" type="radio" id={option} name="option" value={option} checked={option === selectedOption} onChange={() => handleOptionSelect(option)} />
                  <label htmlFor={option}>{option}</label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      
      {/* {currentQuestionIndex === categories[0]?.levels[0]?.questions.length && (
        <ResultQuiz correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers} />
        )} */}
    </>
  );
};
export default StartQuiz;