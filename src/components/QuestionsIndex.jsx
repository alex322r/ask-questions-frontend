import { useContext } from "react"
import { Link} from "react-router"
import { QuestionsContext } from "../context/QuestionsContext"
import { useSearchParams } from "react-router"
import { useEffect } from "react"

/* eslint-disable react/prop-types */
export default function QuestionIndex({ numberOfPages}) {
    
    const {page, setPage, loading} = useContext(QuestionsContext)
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;



    useEffect(() => {
         setPage(currentPage)
     }, [currentPage, setPage])

    if(loading) {
        return null
    }

    return (
        
          <div className="flex flex-wrap gap-1.5 mt-5 mb-5 ">

            {
                page > 1 &&
                <Link to={{pathname: '/questions', search: `?page=${page-1}`}}  className="border border-solid border-blue-400 inline-block rounded-sm leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5 hover:bg-gray-800" >Anterior</Link>
            }
            {
               page === 1 ? 
            <div className="bg-blue-500 border border-solid border-transparent rounded-sm inline-block leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5" >
              1
            </div> :

            <Link to={{pathname: '/questions', search: `?page=${1}` }} className="border border-solid border-blue-400 inline-block rounded-sm leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5 hover:bg-gray-800 ">1</Link>
            }
            {
                page < 5 && 
                Array(4).fill().map((_, index) => {
                    const pageNumber = index + 2
                    if (pageNumber == page){
                        return (
                            <div key={index} className="bg-blue-500 border border-solid border-transparent rounded-sm inline-block leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5" >
                              {pageNumber}
                            </div>
                        )
                    } else {
                        return (
                            <Link to={
                                {pathname: '/questions', search: `?page=${pageNumber}`}
                            }  key={index} className="border border-solid border-blue-400 inline-block rounded-sm leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5 hover:bg-gray-800">{pageNumber}</Link>
                        )
                    }
                }) 


            }
            {
                page < 5 &&


             <div className="border border-solid border-transparent rounded-sm leading-[1.92] pt-0 pb-0 pl-2.5 pr-2.5" >...</div>
            }
            {
                page > 4 &&

             <div className="border border-solid border-transparent rounded-sm leading-[1.92] pt-0 pb-0 pl-2.5 pr-2.5" >...</div>
            }
            {
                page > 4 && numberOfPages - page > 3 &&
                Array(5).fill().map((_, index) => {
                    const pageNumber = index + page - 2
                    if (pageNumber == page){
                        return (
                            <div key={index} className="bg-blue-500 border border-solid border-transparent rounded-sm inline-block leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5" >
                              {pageNumber}
                            </div>
                        )
                    } else {
                        return (
                            <Link to={
                                {pathname: '/questions', search: `?page=${pageNumber}`}
                            } key={index} className="border border-solid border-blue-400 inline-block rounded-sm leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5 hover:bg-gray-800">{pageNumber}</Link>
                        )
                    }
                }) 
            }
            {
                numberOfPages - page < 4 &&
                Array(4).fill().map((_,index) => {
                    const pageNumber = numberOfPages - 4 + index
                    if(pageNumber == page){
                        return (
                            <div key={index} className="bg-blue-500 border border-solid border-transparent rounded-sm inline-block leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5" >
                              {pageNumber}
                            </div>

                        )
                    } else {
                        return (
                            <Link key={index} to={
                                {pathname: '/questions', search: `?page=${pageNumber}`}
                            } className="border border-solid border-blue-400 inline-block rounded-sm leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5 hover:bg-gray-800" href="#">{pageNumber}</Link>
                        )
                    }

                })
            }
            {
                page < numberOfPages - 3 && page > 4 &&

             <div className="border border-solid border-transparent rounded-sm leading-[1.92] pt-0 pb-0 pl-2.5 pr-2.5" >...</div>

            }
            
            {
                page === numberOfPages ?
                <div className="bg-blue-500 border border-solid border-transparent rounded-sm inline-block leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5" >
                  {numberOfPages}
                </div> :
                <Link to={
                    {pathname: '/questions', search: `?page=${numberOfPages}`}
                } className="border border-solid border-blue-400 inline-block rounded-sm leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5 hover:bg-gray-800">{numberOfPages}</Link>

            }
            {
                page < numberOfPages &&
                <Link to={{
                    pathname: '/questions',
                    search: `?page=${page+1}`
                }} className="border border-solid border-blue-400 inline-block rounded-sm leading-[1.92] text-[13px] pt-0 pb-0 pl-2.5 pr-2.5 hover:bg-gray-800">Siguiente</Link>
                
            }
          </div>
        
    )
}