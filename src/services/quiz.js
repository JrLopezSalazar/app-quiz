import axios from "axios";
import { axiosQuiz } from "../config/apiConfig";


export const getAllQuiz = async () => {
  
 const result = await axiosQuiz.get("/api/quiz")
 const category = result.data.categories
   
   return category
  
};




export const getQuizByName = async (quizName) => {
 
  //console.log(quizName)
  const result = await axiosQuiz.get("/api/quiz")
  const resultCategory = result.data.categories.filter(e => e.name == quizName)
  //console.log(resultCategory) 
  return resultCategory  
  // try {
  //   const { data } = await axios.get(url);
  //   // Aquí puedes manipular los datos según tus necesidades
  //   // En tu caso, parece que deseas devolver solo el array de quizes
  //   const resultCategory = data.categories.map(category => category.name );
  //   console.log(resultCategory)
  //   return resultCategory;
  // } catch (error) {
  //   console.error('Error al obtener el quiz por nombre y nivel:', error);
  //   throw error; // Puedes manejar el error de la forma que desees
  // }
};
// export const getQuizByName = async (quizName) => {
//   const url = `https://api-quiz-2v6b.onrender.com/api/quiz?name=${quizName}&level=level`;
  

//   try {
//     const { data } = await axios.get(url);
//     // Aquí puedes manipular los datos según tus necesidades
//     // En tu caso, parece que deseas devolver solo el array de quizes
//     const resultCategory = data.categories.map(category => category.name );
//     console.log(resultCategory)
//     return resultCategory;
//   } catch (error) {
//     console.error('Error al obtener el quiz por nombre y nivel:', error);
//     throw error; // Puedes manejar el error de la forma que desees
//   }
// };









