/* eslint-disable react/prop-types */
import { Link } from "react-router"
import calculateTime from "../utils/calculateTime"
import cleanDescription from "../utils/cleanDescription"

export default function Question({ id, title, description, author, createdDate, views }) {
  const votes = 0
  const answers = 0
  const authorReputation = 0


  const urlTitle = title.replaceAll(/[^a-zA-Z0-9?]/g, "-").toLowerCase()

  const cleanedDescription = cleanDescription(description)



  return (
    <div className="flex flex-col relative border-b-[0.1px] border-solid border-amber-50 p-4">
      <div className="flex items-center text-slate-400  flex-row w-auto shrink-0 flex-wrap text-[13px] gap-1.5 mb-1 mr-4">
        <div className="inline-flex border-1 border-transparent text-[16px] gap-1.5" ><span>{votes}</span><span>votes</span></div>
        <div className="inline-flex border-1 border-transparent gap-1.5 text-[16px]" ><span>{answers}</span><span>answer</span></div>
        <div className="inline-flex border-1 border-transparent gap-1.5 text-[16px]" ><span>{views}</span><span>views</span></div>
      </div>
      <div className=" grow max-w-full" >
        <h3 className=" cursor-pointer text-blue-400 font-normal break-words wor hyphens-auto block text-xl mb-1.5 mt-[-0.15rem] pr-6  " >
          <Link to={`${id}/${urlTitle}`} >
            {title}
          </Link>
        </h3>
        <div className=" break-words hyphens-auto line-clamp-2 overflow-hidden mt-[1px] mb-2.25 text-[13px] " >
          {cleanedDescription}
        </div>
        <div className="flex items-center flex-wrap justify-between gap-x-1.5 gap-y-2 " >
          <div className="inline-block leading-4.5 ml-0" >
            <ul className=" inline " >
              <li className=" inline mr-2 mb-0.5 pr-1 pl-1 bg-slate-500 font-bold rounded-sm  hover:bg-slate-400 cursor-pointer  " ><a href="#" >ksk</a></li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-end ml-auto items-center gap-1 leading-[1] " >
            <a className=" inline-block relative align-bottom  " href="#">
              <div>
                <img className="block w-5 h-5 rounded-sm mt-0 mb-0 mr-auto ml-auto" src="https://www.gravatar.com/avatar/e8efd5e7f4bc064061b9268f4ef858c3?s=32&d=identicon&r=PG&f=y&so-version=2" alt="" />
              </div>
            </a>
            <div className="flex items-center gap-1" >
              <div className="flex flex-wrap whitespace-nowrap min-w-0 break-words font-[12px]" >
                {author ?
                  <a className="m-0.5 text-blue-400" href="#">{author}</a> :
                  <span className="m-0.5 text-blue-400" >anonymous</span>

                }
              </div>
            </div>
            <ul className="flex m-0 p-0 items-center gap-1.5" >
              <li className="text-[13px] text-blue-200 font-bold" ><span>{authorReputation}</span></li>
            </ul>
            <time dateTime="">
              asked&nbsp;
              <span title="2025-01-24 05:49:32Z" className="text-[13px] whitespace-nowrap ">
                {calculateTime(createdDate)} ago
              </span>
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}

