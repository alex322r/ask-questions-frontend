import { Link } from "react-router";

export default function HomePage(){


    return (
        <div className="flex flex-col items-center justify-center h-screen" >
            <h1 className=" text-5xl mb-10" >Questions proyect</h1>
            <Link className="text-3xl rounded-2xl border-blue-500 border-1 p-5 bg-slate-700 hover:scale-125 transition " to={{pathname: '/questions', search : '?page=1'}}  >Go to questions</Link>
        </div>
    )
}