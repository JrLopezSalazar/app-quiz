import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

import QuizCategory from './pages/QuizCategory';
import StartQuiz from './pages/StartQuiz';
import ResultQuiz from './pages/ResultQuiz';
//import ListCategory from "./components/ListCategory"


function App() {
  

  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/quizCategory" element={<QuizCategory />} />
      <Route path="/startquiz" element={<StartQuiz />} />
      <Route path="/resultquiz" element={<ResultQuiz />} />
      
      {/* <Route path="/listCategory" element={<ListCategory/>} /> */}

      

      
    </Routes>
       
    
  )
}

export default App
