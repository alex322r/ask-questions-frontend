import {useContext} from 'react'
import { QuestionsContext } from '../context/QuestionsContext.jsx'

export default function QuestionCount() {
   const {questionsCount} = useContext(QuestionsContext) 
 return (
    <div className="mb-3 mr-0 text-xl " >{ questionsCount ? questionsCount : 0 } questions</div>
 )
}