import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./EffectCardCategory.css";
import { getAllQuiz } from "../services/quiz";
import StartQuiz from "../pages/StartQuiz";
import { useNavigate } from "react-router-dom";

import {useStore} from '../store/categories'

const EffectCardsCategory = () => {
  const navigate = useNavigate();
  const { selectedCategory, selectedLevel, setSelectedCategory, setSelectedLevel } = useStore();
  const [categories, setCategories] = useState([]);
 

  const handleLevelSelect = (categoryName, level) => {
    setSelectedCategory(categoryName);
    setSelectedLevel(level);
    //console.log("dirigiendo a startquiz")
    //console.log("verificar valor de: ", categoryName)
    navigate("/startQuiz");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllQuiz();
        setCategories(result);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper  mt-24"
      >
        {categories.map((category) => (
          <SwiperSlide className="flex flex-col" key={category.name}>
            <h3 className="flex justify-center uppercase  mb-8">{category.name}</h3>
            <div className="flex flex-col gap-6">
              {category.levels.map((nivel) => (
                <button
                  className={`px-3 py-1 text-sm capitalize border-[2px] ${selectedLevel === nivel.level ? 'bg-gray-200' : ''}`}
                  key={nivel.level}
                  onClick={() => handleLevelSelect(category.name, nivel.level)}
                >
                  {nivel.level}
                </button>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedCategory && selectedLevel && (
  <StartQuiz selectedCategory={selectedCategory} selectedLevel={selectedLevel} />
)}

    </>
  );
};

export default EffectCardsCategory;



// import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "./EffectCardCategory.css";
// import { EffectCards } from "swiper/modules";
// import { axiosQuiz } from "../config/apiConfig";
// import { getAllQuiz } from "../services/quiz";
// import StartQuiz from "../pages/StartQuiz";
// import { useNavigate } from "react-router-dom";

// const EffectCardsCategory = () => {
//   const navigate = useNavigate();

//   const [categories, setCategories] = useState([]);
//   const [selectedLevel, setSelectedLevel] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleLevelSelect = (categoryName, level) => {
//     setSelectedCategory(categoryName);
//     setSelectedLevel(level);
//     navigate("/startQuiz");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getAllQuiz();
//         setCategories(result);
//         //console.log(getAllQuiz())
//       } catch (error) {
//         console.error("Error al obtener datos:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper  mt-24"
//       >
//         {categories.map((category) => (
//           <SwiperSlide className="flex flex-col" key={category.name}>
//             {/* <div className="bg-white   "> */}
//             <h3 className="flex justify-center uppercase  mb-8">
//               {category.name}
//             </h3>

//             {/* </div> */}
//             <div className="flex flex-col gap-6  ">
//               {category.levels.map((nivel) => (
//                 <button
//                   className={`px-3 py-1 text-sm capitalize border-[2px] ${
//                     selectedLevel === nivel.level ? "bg-gray-200" : ""
//                   }`}
//                   key={nivel.level}
//                   onClick={() => handleLevelSelect(category.name, nivel.level)}
//                 >
//                   {nivel.level}
//                 </button>

//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {selectedCategory && selectedLevel && (
//         <StartQuiz
//           selectedCategory={selectedCategory}
//           selectedLevel={selectedLevel}
//         />
//       )}
//     </>
//   );
// };

// export default EffectCardsCategory;
