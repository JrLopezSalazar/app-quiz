import React, { useEffect, useState } from "react";
import { getQuizByName } from "../services/quiz";
import { useStore } from '../store/categories';
import ResultQuiz from './ResultQuiz'; // Importa el componente ResultQuiz
//import { useStoreResults } from "../store/resultsQuiz";

const StartQuiz = () => {
  const { selectedCategory } = useStore();
  const [categories, setCategories] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  //const {correctAnswers, incorrectAnswers, setCorrectAnswers, setIncorrectAnswers } = useStoreResults();

  useEffect(() => {
    if (selectedCategory) {
      getQuizByName(selectedCategory)
        .then(data => {
          setCategories(data);
        })
        .catch(error => {
          console.error('Error al obtener datos:', error);
        });
    }
  }, [selectedCategory]);

   const handleOptionSelect = (option) => {
   setSelectedOption(option);

//   //   // Verifica si la opción seleccionada es la correcta y actualiza el estado de respuestas correctas e incorrectas
   if (option === categories[0]?.levels[0]?.questions[currentQuestionIndex]?.correctAnswer) {
     setCorrectAnswers(prev => prev + 1);
   } else {
     setIncorrectAnswers(prev => prev + 1);
   }

    // Pasa a la siguiente pregunta/
  setCurrentQuestionIndex(prev => prev + 1);

  // Verifica si se han respondido todas las preguntas y navega a la página de resultados si es así
  //  if (currentQuestionIndex + 1 === categories[0]?.levels[0]?.questions.length) {
  //    navigate('/resultquiz');
  //  }
};

   const progress = categories.length > 0 ? ((currentQuestionIndex + 1) / categories[0]?.levels[0]?.questions.length) * 100 : 0;



  return (
    <section className="bg-[#b34040ea] h-screen flex flex-col items-center">
      {/* Progreso del cuestionario */}
      {currentQuestionIndex < categories[0]?.levels[0]?.questions.length && (
        <div className="progress-bar border-4 flex ml-0 h-1 w-full bg-neutral-200 dark:bg-neutral-600" style={{ width: `${progress}%` }}></div>
      )}
      
      {currentQuestionIndex < categories[0]?.levels[0]?.questions.length && (
        <h3 className="text-3xl text-white mt-20 mb-5">Categoría: {selectedCategory}</h3>
      )}

      {/* Renderiza las preguntas y opciones */}
      {categories.length > 0 && currentQuestionIndex < categories[0]?.levels[0]?.questions.length && (
        <div className="flex flex-col text-xl justify-center mt-28">
          <h4 className="mb-24">Pregunta {currentQuestionIndex + 1}</h4>
          <p>{categories[0]?.levels[0]?.questions[currentQuestionIndex]?.question}</p>
          <ul className="flex flex-col gap-7 mx-auto">
            {categories[0]?.levels[0]?.questions[currentQuestionIndex]?.options.map((option, index) => (
              <li className="bg-[#7f569e] border-black border w-[380px] h-[120px] rounded-[30px] shadow-md border-r-4 border-b-4 flex justify-center items-center" key={index}>
                <input className="sr-only" type="radio" id={option} name="option" value={option} checked={option === selectedOption} onChange={() => handleOptionSelect(option)} />
                <label htmlFor={option}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Mostrar el componente ResultQuiz una vez completado el cuestionario */}
      {currentQuestionIndex === categories[0]?.levels[0]?.questions.length && (
        <ResultQuiz correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers} />
      )}
    </section>
  );
};

export default StartQuiz;
