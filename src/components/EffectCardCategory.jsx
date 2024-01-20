import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./EffectCardCategory.css";
import { EffectCards } from "swiper/modules";
import { axiosQuiz } from "../config/apiConfig";
import { getAllQuiz } from "../services/quiz";

const EffectCardsCategory = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllQuiz();
        setCategories(result);
        //console.log(getAllQuiz())
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
            {/* <div className="bg-white   "> */}
              <h3 className="flex justify-center uppercase">{category.name}</h3>
              
            {/* </div> */}
            <div className="flex flex-nowrap gap-6  ">
            {category.levels.map((nivel) => (
                <button className=" text-sm capitalize" key={nivel.level}>{nivel.level}</button>
              ))}
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className=" bg-green-300">hola</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
       
        
      </Swiper> */}

    </>
  );
};

export default EffectCardsCategory;
