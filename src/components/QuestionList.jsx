import { useContext } from "react";
import Question from "./Question";
import QuestionSkeleton from "./QuestionSkeleton";
import { QuestionsContext } from "../context/QuestionsContext";
import "react-loading-skeleton/dist/skeleton.css";

export default function QuestionList() {

  const { questions, loading } = useContext(QuestionsContext);

  const QUESTION_PER_PAGE = 5;

  const author = (question) => {
    if (question.userName) {
      return question.userName;
    } else {
      return question.guestName;
    }
  }

  return (
    <div className="w-auto mb-5   border-t-[0.1px] border-solid border-amber-50 ">
      {
        loading ? <QuestionSkeleton questions={QUESTION_PER_PAGE} />
          :
          questions.map((question) => (
            <Question key={question.id} id={question.id} title={question.title} description={question.description} author={author(question)} createdDate={question.createdAt} views={question.views} />
          ))
      }
    </div>

  )


}