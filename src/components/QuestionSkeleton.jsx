import Skeleton from "react-loading-skeleton";

export default function QuestionSkeleton({questions}) {

    return Array.from({length: questions}, (_, index) => (
        <div key={index} className="flex flex-col relative border-b-[0.1px] p-4" >
            <div className="text-[13px] mb-1 mr-4" >
                <Skeleton duration={1}/>
            </div>
            <h3 className="font-normal text-xl mb-1.5 mt-[-0.15rem] pr-6  ">
                <Skeleton duration={1}/>
            </h3>
            <div className="mt-[1px] mb-2.25 text-[13px] " >
                <Skeleton  duration={1} count={2}/>
            </div>
            <div className="text-xs">
                <Skeleton duration={1}/>
            </div>
        </div>
     ))
    
}