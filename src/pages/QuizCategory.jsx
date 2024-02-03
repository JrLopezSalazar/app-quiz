
import EffectCardsCategory from "../components/EffectCardCategory";
import { getAllQuiz } from "../services/quiz";
import {userInfo}  from "../store/namePlayers";

const QuizCategory = (  ) => {

  const userStore = userInfo();
  const userName = userStore.user.name;
  
//console.log(userName)
  // const {
  //   logout
  // } = useQuiz()
  
  getAllQuiz()
  //console.log(getAllQuiz())
  
 
  
  return (
    <section className="bg-[#b34040ea] h-screen ">
      <h2 className=" flex justify-center  text-4xl pt-12 font-font-Yanone capitalize" >Hola {userName}</h2>
      <h3 className="text-2xl justify-center flex font-font-Yanone">Empezamos seleccionando la tecnología y dificultad</h3>
      <div className=" flex  justify-center mt-11">
      
          <EffectCardsCategory />
        
      </div>
    </section>
  );
};

export default QuizCategory;

