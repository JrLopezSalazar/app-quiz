import React from "react";
import { useNavigate } from "react-router-dom";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { userInfo } from "../store/namePlayers";

const Home = () => {
  const nagivate = useNavigate();
  const userStore = userInfo();

  const handleSubmit = (e) => {
    e.preventDefault();
    const namePlayer = Object.fromEntries(new FormData(e.target));
    userStore.login({ name: namePlayer.name });
    nagivate("/quizCategory");
    //console.log(namePlayer)
  };

  return (
    <>
    <article className="bg-[#b34040ea] h-screen flex flex-col ">
      <div className="container h-60  mx-auto mt-24 ">
        <img className=" h-[490px]  " src="/images/logo.jpg" alt="" />
      </div>
      {/* <h3 className='mx-auto mt-36 text-4xl '>Hola Devi</h3> */}

      <section className="flex mx-auto mt-[330px] border border-black bg-gradient-to-r  from-[#40b385]  to-[#73caaa] w-[260px] rounded-[30px] ">
        <form
          onSubmit={handleSubmit}
          className="  flex   "
          // onSubmit={handleSubmit}
        >
          <input
            className="focus:outline-none bg-transparent text-xl h-14 font-Josefin font-semibold w-[205px] justify-center mx-auto placeholder-transparent placeholder-black text-center"
            id="name"
            autoComplete="off"
            placeholder="     Nombre o alias"
            type="text"
            name="name"
            required
            //bg-[#cc717175] color
            //border-[#803131]  color rojo de fondo
          />

          <button
            className=" rounded-full border border-black w-14 mr-14  "
          >
            <img className="ml-" src="/images/arrow.png" alt="" />
          </button>
        </form>
      </section>
    </article>
      </>
  );
};

export default Home;
