import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

import QuizCategory from './pages/QuizCategory';
import StartQuiz from './pages/StartQuiz';
//import ListCategory from "./components/ListCategory"


function App() {
  

  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/quizCategory" element={<QuizCategory />} />
    <Route path="/startquiz" element={<StartQuiz />} />
      
      {/* <Route path="/listCategory" element={<ListCategory/>} /> */}

      

      
    </Routes>
       
    
  )
}

export default App
