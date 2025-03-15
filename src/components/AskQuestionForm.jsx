import PostEditor from "./PostEditor";
import PostTitle from "./PostTitle";
import TagEditor from "./TagEditor";
import NewPostLogin from "./NewPostLogin"
export default function AskQuestionForm() {

  const handleSubmit = function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className="flex flex-col items-stretch justify-between">
      <div className=" basis-auto shrink grow">
        <form id="question-form" onSubmit={handleSubmit} >
          <div>
            <p className="mb-3.5 text-right text-base text-gray-500 ">Required fields*</p>
            <div className="p-4.5 shadow shadow-blue-50 bg-gray-600 border border-gray-400 rounded-sm " >
              <PostTitle />
              <PostEditor />
              <TagEditor />
              <NewPostLogin />
            </div>
            <div className="">
              <div className="flex mt-9"></div>
              <button className="mx-0.75 bg-blue-600 text-base p-2.75 cursor-pointer inline-block relative rounded-md " >
                Revisa tu pregunta
              </button>

            </div>
          </div>

        </form>

      </div>
    </div>
  )
}
