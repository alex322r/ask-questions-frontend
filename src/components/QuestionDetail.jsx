import QuestionDescription from "./QuestionDescription";

/* eslint-disable react/prop-types */
export default function QuestionDetails({createdAt, description}) {

    function calculateDate(d) {

        const date = new Date(d);

        const options = {
            month: "short", 
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        }

        return date.toLocaleString("en-US", options).replaceAll(",", " at").replace("at", ",")

    }

    return (
                    <div className="w-full border-b " >
            <div className="grid  grid-cols-[max-content_1fr] ">
                <div className="w-auto pr-5 col-start-1 col-end-auto">
                    <div className="flex items-center justify-center flex-col text-gray-500">
                        <button className=" hover:bg-orange-400 cursor-pointer border p-3 m-0.75 border-gray-400 rounded-4xl text-sm " >
                            <svg aria-hidden="true" className=" fill-amber-50" width="18" height="18" viewBox="0 0 18 18"><path d="M1 12h16L9 4z"></path></svg>
                        </button>
                        <div className="flex items-center mx-0.5 my-0.5 py-1.25 font-bold text-[20px] leading-none" >
                            0
                        </div>
                        <button className=" hover:bg-orange-400 cursor-pointer border p-3 m-0.75 mb-2.25  border-gray-400 rounded-4xl text-sm " >
                            <svg aria-hidden="true" className="fill-amber-100" width="18" height="18" viewBox="0 0 18 18"><path d="M1 6h16l-8 8z"></path></svg>
                        </button>
                        <button className=" cursor-pointer pb-1.25">
                            <svg aria-hidden="true" className="fill-blue-400" width="18" height="18" viewBox="0 0 18 18"><path d="m9 10.6 4 2.66V3H5v10.26zM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4z"></path></svg>

                        </button>
                        <a className="my-0.75 mx-3.75 py-1.75" href="#">

                            <svg aria-hidden="true" className="fill-blue-400 hover:fill-blue-700" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10z"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="w-auto pr-5 col-start-2 col-end-auto">

                    <div className="">
                        {/* description component */}
                        <QuestionDescription description={description} />
                        <div className="mt-7 mb-3.5">
                            <div className="-mt-0.5 mb-3">
                                <div className="flex">
                                    <ul className="mb-3 font-bold">
                                        <li className="mr-1.25 inline" ><a className=" hover:bg-gray-700 my-0.5 px-1.25  bg-gray-400 rounded-sm  " href="#">html</a></li>
                                        <li className="mr-1.25 inline" ><a className=" hover:bg-gray-700 my-0.5 px-1.25  bg-gray-400 rounded-sm  " href="#">css</a></li>
                                        <li className="mr-1.25 inline" ><a className=" hover:bg-gray-700 my-0.5 px-1.25  bg-gray-400 rounded-sm  " href="#">font-awesome</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start content-end flex-wrap my-4.5 pt-1.25">
                                <div className=" w-24 my-1.25 mr-4.5 grow shrink basis-auto " >
                                    <div className="pt-0.5">
                                        <div className="flex flex-wrap text-sm">
                                            <div className="m-1.25" ><a href="#">Share</a></div>
                                            <div className="m-1.25" ><a href="#">Improve this question</a></div>
                                            <div className="m-1.25" ><button className=" cursor-pointer" href="#">Follow</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-1.25">
                                    <div className=" bg-gray-700 rounded-t-sm pt-1.5 pr-1.75 pb-2 pl-2">
                                        <div className="w-58" >
                                            <div className="mt-0.5 mb-1.25">asked {calculateDate(createdAt)}</div>
                                        </div>
                                        <div className=" inline-block" >
                                            <a href="#">
                                                <div>
                                                    <img width="32" height="32" src="https://www.gravatar.com/avatar/d6f01ec629e36659c59f119cf1d42643?s=64&d=identicon&r=PG&f=y&so-version=2" alt="imagen" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="ml-2.25 text-sm inline-block" >
                                            <a href="#">NothingButTyler backup</a>
                                            <div className=" text-base " >
                                                <span className="mr-1 font-bold" >9</span>
                                                <span className="mr-1 ml-0.5" >
                                                    <span className="background-dot mr-1 ml-0.5" ></span>
                                                    <span>2</span>

                                                </span>
                                                
                                            </div>

                                        </div>

                                    </div>
                                    <div className="bg-gray-600 rounded-b-sm ">
                                        <div className="py-1.75 px-2.25" >
                                            <span className="inline-block " >
                                            <svg  className=" fill-gray-800 inline-block mr-1" width="18" height="18" viewBox="0 0 18 18"><path  d="M10.7 17c-2.3 0-3.9-2.05-5.07-3.54l-.49-.6c-.67-.8-1.59-1.63-2.4-2.36A11 11 0 0 1 1.1 8.87c-.16-.28-.15-.8.18-.96.44-.23.95-.05 1.32.24l3.5 2.75c.1.08.2-.06.13-.15-.57-.8-3.42-4.77-3.71-5.15-.49-.63-.17-1.45.68-1.45.44 0 .76.28.96.51l3.6 4.42c.08.09.23 0 .17-.1L4.41 2.96c-.64-1.1 1.13-2 1.77-.9l3.8 6.13c.07.1.22.03.18-.09A154 154 0 0 0 8.1 2.54q-.47-1.01.36-1.42c.52-.27 1.14-.07 1.47.48l3.69 8.3q.03.05.1.06a.1.1 0 0 0 .09-.07l.66-2.28c.2-.66.95-1 1.6-.81.7.18 1.09.86.89 1.5q-.5 1.9-1.09 3.77c-.58 1.86-1.03 3.33-3.11 4.4Q11.7 17 10.7 17"></path><path d="M14 .37a.5.5 0 0 0-.88.45l1.96 3.9a.5.5 0 0 0 .9-.45zm-1.17 2.17a.5.5 0 0 0-.91.42l.84 1.87a.5.5 0 1 0 .91-.41zm-10.6 9.74a.5.5 0 0 1 .7-.02l1.7 1.6a.5.5 0 0 1-.7.72l-1.68-1.6a.5.5 0 0 1-.02-.7m-1.39.98a.5.5 0 1 0-.68.73l3.03 2.84a.5.5 0 0 0 .68-.73z" opacity=".4"></path></svg>
                                            <span className="inline-block text-sm leading-5.25 align-bottom  " >New contributor</span>
                                            </span>

                                        </div>

                                    </div>
                                    <div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}