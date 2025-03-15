/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ButtonItem({ index, handleClick }) {
    const initial = -20
    const [bgPosition, setBgPosition] = useState(`${index * initial}px -20px`)



    return (
        <li onClick={handleClick} className="max-w-8 w-8 h-12.75 pt-3.5 text-center cursor-pointer"
        
            onMouseEnter={() => setBgPosition(`${index * initial}px -40px`)}
            onMouseLeave={() => setBgPosition(`${index * initial}px -20px`)}
            >
            <span className={`w-5.75 h-5.75 inline-block bg-[url(/src/assets/icons.svg)]`}
                style={{ backgroundPosition: bgPosition }}
            >

            </span>
        </li>

    )
}