import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";


export default function Blogs(){

    const {loading,post} = useContext(AppContext);

    return(

        <div className="w-11/12 max-w-[650px]  py-8 flex flex-col gap-y-7 mt-[66px] mb-[66px]">

        {
            loading ? (<Spinner/>) : (
                post.length === 0 ? (
                <div >
                    <p className="text-center font-semibold text-6xl text-amber-600">No Post Found</p>
                </div>
                 ) : 
                
                (post.map( (p) => (
                   <BlogDetails key={p.id} post={p}/>
                ) ))
            )
        }


        </div>
    )

}