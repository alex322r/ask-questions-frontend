import QuestionDetail from "../components/QuestionDetail"
import { useParams } from "react-router"
import useQuestionById from "../hooks/useQuestionById"
import calculateDate from "../utils/calculateDate"


export default function QuestionDetailPage() {

    const {id} = useParams()

    const { question, loading } = useQuestionById(id)



    if(loading) {
        return (
            <div className=" max-w-7xl w-full bg-none flex justify-between mr-auto ml-auto mt-0 mb-0 text-left">
                <div className="px-5 py-7 max-w-6xl mx-auto my-0">
                    <div>
                        <div className="flex flex-wrap flex-col justify-between ">
                            <h1 className="mb-3 break-words text-3xl leading-10 order-2">
                                Loading...
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }



    return (
        <div className=" max-w-7xl w-full bg-none flex justify-between mr-auto ml-auto mt-0 mb-0 text-left">
            <div className="px-5 py-7 max-w-6xl mx-auto my-0">
                <div>
                    <div className="flex flex-wrap flex-col justify-between ">
                        <h1 className="mb-3 break-words text-3xl leading-10 order-2">
                            {question.title}
                        </h1>
                        <div className="flex mb-4 order-1 justify-end">
                            <div className="ml-4  ">
                                <a className=" inline-block  border-transparent rounded-md p-2.5 font-medium bg-blue-700 text-lg" href="#">
                                    Ask Question
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-wrap mb-5 pb-3 border-b-1 text-sm">
                        <div className="mb-3 mr-5" title="">
                            <span className="mr-0.75">Asked</span>
                            <time className="font-bold" itemProp="" dateTime="">{calculateDate(question.createdAt)}</time>
                        </div>
                        <div className="mb-3 mr-5">
                            <span className="mr-0.75">Modified</span>
                            <a href="#" className="font-bold" title="">today</a>
                        </div>
                        <div className="mb-3 font-bold" title="Viewed 26 times">
                            <span className="mr-0.75 font-normal">Viewed</span>
                            {question.viewsCount} times
                        </div>
                    </div>
                        <QuestionDetail description={question.description}  createdAt={question.createdAt} />

                    {/* Answers component */}
                    <div className="pt-3" >

                    </div>

                </div>
            </div>
        </div>
    )

}