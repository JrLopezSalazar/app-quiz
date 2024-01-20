// import { useEffect, useState } from "react";
// import { getAllQuiz } from "../services/quiz"
// //import QuizCategory from "../pages/QuizCategory"
// import EffectCardsCategory from "./EffectCardCategory";


// const ListCategory = () => {
  
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getAllQuiz();
//         setCategories(result);
//         console.log(getAllQuiz())
//       } catch (error) {
//         console.error('Error al obtener datos:', error);
//       }
//     };

//     fetchData();
//   }, []);
 

//   return (
//     <section className="bg-gray-600 h-screen">
//       <h2 className='text-2xl'>hola</h2>
                                                
//         {categories.map((category) =>  (
//             <EffectCardsCategory  key={category.id} category={category}  />
//           ))}
//     </section>
//   )
// }

// export default ListCategory