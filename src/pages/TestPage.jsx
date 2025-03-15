import AskQuestionForm from "../components/AskQuestionForm";
import AskQuestionPageContainer from "../components/AskQuestionPageContainer";

export default function TestPage() {
    return (

        <div className="flex w-full max-w-full justify-center">
            <AskQuestionPageContainer>
                <AskQuestionForm />
            </AskQuestionPageContainer>
        </div>
    )
}