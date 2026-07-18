import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa6";


export default function Card({review}){

    return(
        <div className="flex flex-col md:relative ">

            <div className="absolute top-[-7rem] mx-auto z-[10]">
                <img className="aspect-sqaure rounded-full w-[140px] h-[140px] z-[25]" src={review.image} alt="" />
                <div className="w-[140px] h-[140px] rounded-full bg-violet-500
                absolute top-[-7px] left-[10px] z-[-20] "></div>
            </div>


            <div className="text-center mt-7">
                <p className="font-bold text-2xl tracking-wider capitialze">{review.name}</p>
                <p className="text-violet-500 uppercase text-sm">{review.job}</p>
            </div>

    

            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>

            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteRight/>
            </div>


          



        </div>
    )
}