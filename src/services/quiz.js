import { axiosQuiz } from "../config/apiConfig";

export const getAllQuiz = async () => {
  
 const result = await axiosQuiz.get("/api/quiz")
 const category = result.data.categories
     //.then((response) => {const result = response.data.categories})
     //console.log(category)
    return category
  // await axiosQuiz.get("/api/quiz")
  //    .then((response) => {const result = response.data.categories})
     
  //   return result
};

//export const getCategories = async () => {};
