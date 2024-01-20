import React from 'react'
import { useNavigate } from 'react-router-dom'




import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import { userInfo } from '../store/namePlayers';

const Home = () => {
    const nagivate = useNavigate()
    const userStore = userInfo();

    const handleSubmit = (e) => {
        e.preventDefault()
        const namePlayer = Object.fromEntries(new FormData(e.target)) 
        userStore.login({ name: namePlayer.name });
        nagivate("/quizCategory")
        //console.log(namePlayer)
    }

  return (
    <section className='bg-[#b34040ea] h-screen flex flex-col '>
      
         <div className='container h-52 w-52 mx-auto mt-14 '>
            <img className=' justify-center ' src="/images/logo.jpg" alt="" />
        </div>
        <h3 className='mx-auto mt-36 text-4xl '>Hola Dev</h3>

          <form onSubmit={handleSubmit}
            className="flex mx-auto  mt-72 flex-col  justify-center items-center  h-[73px] w-[60%]   "
            // onSubmit={handleSubmit}
          >
                <input
              className=" w-full bg-transparent  h-14  border-b-4 placeholder:text-black border-[#803131]"
              id="name"
              autoComplete="off"
              placeholder="            Nombre o alias"
              type="text"
              name='name'
              required
              //bg-[#cc717175] color
            /> 
 
            <button className="bg-gradient-to-r mt-3 rounded-lg py-2 mx-auto from-[#40b385]  to-[#73caaa] 
             w-[60%] ">Ingresar</button>
          </form> 
    </section>
  )
}

export default Home