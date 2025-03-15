import './App.css'
import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from './pages/HomePage'
import QuestionPage from './pages/QuestionPage'
import { SkeletonTheme } from 'react-loading-skeleton'
import QuestionDetailPage from './pages/QuestionDetailPage'
import AskQuestionPage from './pages/AskQuestionPage'
import TestPage from './pages/TestPage'

function App() {


  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='questions'>
            <Route index element={<QuestionPage />} />
            <Route path=':id'>
              <Route path=':title' element={<QuestionDetailPage />} />
            </Route>
            <Route path='ask' element={<AskQuestionPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  )
}

export default App
