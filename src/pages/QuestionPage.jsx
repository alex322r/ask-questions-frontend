import QuestionHeader from "../components/QuestionHeader.jsx"
import QuestionList from "../components/QuestionList.jsx"
import QuestionPageContainer from "../components/QuestionPageContainer.jsx"
import QuestionIndex from "../components/QuestionsIndex.jsx"
import { QuestionsContext } from "../context/QuestionsContext.jsx"
import useQuestions from "../hooks/useQuestions"

export default function QuestionPage() {

    const {questions, loading, page, setPage} = useQuestions()

    return (
        <QuestionPageContainer>
            <QuestionsContext.Provider value={{questions, loading, page, setPage}}>
                <QuestionHeader />
                <QuestionList />
                <QuestionIndex numberOfPages={7} />
            </QuestionsContext.Provider>
        </QuestionPageContainer>
    )

}