/* eslint-disable react/prop-types */
export default function AskQuestionPageContainer({ children, errorRef }) {
    return (

        <div ref={errorRef} className="px-4.5 pb-6.75 w-full max-w-7xl" >
            <div className="flex py-6.75 items-center">
                <div className="font-bold text-3xl">
                    Ask a Question
                </div>
            </div>
            {children}
        </div>

    )
}