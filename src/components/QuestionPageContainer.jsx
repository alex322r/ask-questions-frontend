/* eslint-disable react/prop-types */
export default function QuestionPageContainer({ children }) {
    return (
        <div className="w-full max-w-6xl flex justify-between mt-0 mb-0 mr-auto ml-auto text-left pl-4 pr-4 p-6" >
            <div className="w-full pl-4 pr-4" >
                <div className="w-f m-0 p-0" >
                    {children}
                </div>

            </div>
        </div>
    )
}