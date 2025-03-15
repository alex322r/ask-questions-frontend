import { Link } from "react-router"
import QuestionCount from "./QuestionCount"
import { useState } from "react"

export default function QuestionHeader() {
    const [categories, setCategories] = useState("newest")
    const handleCategoryChange = (e) => {
        e.preventDefault()
        const category = e.currentTarget.id
        setCategories(category)
    }
    
    return (
        <>
          <div className="flex mb-3 flex-wrap m-0 p-0 border-0 justify-between">
            <h1 className="text-3xl mb-3 ">Newest Question</h1>
            <div className="ml-3 mb-3 p-0 border-0 flex" >
              <Link to='./ask' className="bg-[rgb(228,138,47)] whitespace-nowrap border-1 border-transparent border-solid p-2.5 rounded-md text-md font-bold  ">Ask Question</Link>
            </div>
          </div>
          <div className="m-0 p-0 border-0 align-baseline" >
            <div className=" items-stretch flex flex-col mb-3 justify-between ">
              <QuestionCount />
              <div className="m-0 p-0 border-0 align-baseline">
                <div className="flex items-center justify-between">
                  <div className="mr-4 inline-flex p-1 rounded-md border border-solid border-slate-700 " >
                    <a id="newest" onClick={handleCategoryChange} className={`pr-[4.8px] pl-[4.8px] pt-[5.8px] pb-[5.8px] ${categories == "newest" ? "bg-slate-400 text-black font-bold rounded-md" : ""}`} href="/questions?tab=Newest">
                      <span>Newest</span>
                    </a>
                    <a id="active" onClick={handleCategoryChange} className={`pr-[4.8px] pl-[4.8px] pt-[5.8px] pb-[5.8px] ${categories == "active" ? "bg-slate-400 text-black font-bold rounded-md" : ""}`} href="/questions?tab=Active" >
                      <span className="">Active</span>
                    </a>
                    <button id="more" onClick={handleCategoryChange} className={`pr-[14.4px] pl-[4.8px] pt-[5.8px] pb-[5.8px] cursor-pointer ${categories == "more" ? "bg-slate-400 text-black font-bold rounded-md" : ""}`} type="button" >
                      <span className={`relative after ${categories == "more" ? "after:border-slate-900" : "after:border-cyan-100"} after:border-solid after:border-[5px] after:border-b-0 after:absolute after:top-1.75 after:left-10 after:border-r-transparent after:border-l-transparent`} >More</span>
                    </button>
                  </div>
                  <div className="">
                    <button className="border-slate-700 border-solid border-1 text-white cursor-pointer inline-flex leading-0 items-center  gap-1 rounded-md p-[9.6px]">
                      <svg aria-hidden="true" className=" align-baseline fill-white " width="18" height="18" viewBox="0 0 18 18"><path d="M2 4h14v2H2zm2 4h10v2H4zm8 4H6v2h6z"></path></svg> Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )

}