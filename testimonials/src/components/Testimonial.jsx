import { useState } from "react";
import Card from "./Card"
import { FiChevronRight,FiChevronLeft  } from "react-icons/fi";

export default function Testimonial({reviews}){

    const [index,setIndex] = useState(0);

    function leftHandler(){
        if(index-1 <0){
            setIndex(reviews.length -1);
        }
        else{
            setIndex(index-1);
        }
    }


    function rightHandler(){
        if(index + 1 >=reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }


    }

    function surpriseHandler(){
        let rndIdx = Math.floor(Math.random() * reviews.length);
        setIndex(rndIdx);
    }

    return(
    <div className="w-[85vw] md:w-[700px] rounded-md  bg-white flex flex-col justify-center items-center mt-10 p-10
    transition-all duration-700 cursor-pointer hover:shadow-2xl">
        <Card review={reviews[index]}/>

          <div className="flex justify-center items-center  text-3xl mt-10 
          gap-3  text-violet-400 font-bold ">
                <button onClick={leftHandler}
                 className="cursor-pointer hover:text-violet-500 "> 
                    <FiChevronLeft/>
                </button>
                <button onClick={rightHandler}
                 className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-6" >
                <button onClick={surpriseHandler}
                 className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2  rounded-md  font-bold text-lg text-white">Surprise Me</button>
            </div>
    </div>
    )
}