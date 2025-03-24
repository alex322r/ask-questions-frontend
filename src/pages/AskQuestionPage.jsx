import { useRef } from "react";
import AskQuestionForm from "../components/AskQuestionForm";
import AskQuestionPageContainer from "../components/AskQuestionPageContainer";

export default function AskQuestionPage() {

    const ref = useRef(null)



    return (

        <div className="flex w-full max-w-full justify-center">
            <AskQuestionPageContainer errorRef={ref}>
                <AskQuestionForm errorRef={ref} />
            </AskQuestionPageContainer>
        </div>
    )
}