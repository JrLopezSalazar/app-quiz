import React from 'react'
import { getAllQuiz } from '../services/quiz';
import ListCategory from '../components/ListCategory';
import { useState, useEffect } from 'react';


const useQuiz = () => {

    const [quizData, setQuizData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllQuiz();
            setQuizData(data);
          } catch (error) {
            console.error('Error al obtener datos del quiz', error);
          }
        };
    
        fetchData();
      }, []);
    
  return (

       <ListCategory quizData={quizData} />
  )

    
  
}

export default useQuiz