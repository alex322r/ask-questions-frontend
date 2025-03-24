import QuestionHeader from "../components/QuestionHeader.jsx"
import QuestionList from "../components/QuestionList.jsx"
import QuestionPageContainer from "../components/QuestionPageContainer.jsx"
import QuestionIndex from "../components/QuestionsIndex.jsx"
import { QuestionsContext } from "../context/QuestionsContext.jsx"
import useQuestions from "../hooks/useQuestions"

export default function QuestionPage() {

    const { questions, loading, page, setPage } = useQuestions()

    return (
        <QuestionsContext.Provider value={{ questions, loading, page, setPage }}>
            <QuestionPageContainer >
                <QuestionHeader />
                <QuestionList />
                <QuestionIndex numberOfPages={7} />

            </QuestionPageContainer>
        </QuestionsContext.Provider>
    )

}