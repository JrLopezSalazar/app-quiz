
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
    <section className="bg-[#b34040ea]  ">
      <h2 className="font-semibold flex justify-center  " >Hola {userName}</h2>
      <h3 className="text-2xl">Empezamos seleccionando la tecnología y dificultad</h3>
      <div className=" flex items-center justify-center">
      
          <EffectCardsCategory />
        
      </div>
    </section>
  );
};

export default QuizCategory;

