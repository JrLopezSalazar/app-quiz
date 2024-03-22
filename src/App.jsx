import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

import QuizCategory from './pages/QuizCategory';
import StartQuiz from './pages/StartQuiz';
import ResultQuiz from './pages/ResultQuiz';
import Header from './components/Header';
//import ListCategory from "./components/ListCategory"


function App() {
  

  return (
    <div> {/* Envuelve todo en un solo elemento */}
      <Header /> {/* La cabecera debe estar fuera de <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizCategory" element={<QuizCategory />} />
        <Route path="/startquiz" element={<StartQuiz />} />
        <Route path="/resultquiz" element={<ResultQuiz />} />
      </Routes>
    </div>
       
    
  )
}

export default App
