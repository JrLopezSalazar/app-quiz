import axios from "axios";
import { axiosQuiz } from "../config/apiConfig";


export const getAllQuiz = async () => {
  
 const result = await axiosQuiz.get("/api/quiz")
 const category = result.data.categories
   
   return category
  
};

export const getQuizByNameAndLevel = async (quizName, level) => {
  try {
    const response = await axiosQuiz.get("/api/quiz");
    const matchingCategory = response.data.categories.find(category => category.name === quizName);
    if (matchingCategory) {
      const matchingLevel = matchingCategory.levels.find(quizLevel => quizLevel.level === level);
      if (matchingLevel) {
        console.log(matchingLevel.questions)
        return matchingLevel.questions;
      } else {
        throw new Error(`No se encontró el nivel '${level}' para el cuestionario '${quizName}'.`);
      }
    } else {
      throw new Error(`No se encontró el cuestionario '${quizName}'.`);
    }
    
  } catch (error) {
    console.error("Error al obtener el cuestionario por nombre y nivel:", error);
    return []; // Devolver una lista vacía en caso de error
  }
  
};
export const getQuizByName = async (quizName) => {
 
  //console.log(quizName)
  const result = await axiosQuiz.get("/api/quiz")
  const resultCategory = result.data.categories.filter(e => e.name == quizName)
  //console.log(resultCategory) 
  return resultCategory  
 
};










