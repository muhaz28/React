import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
 import { ToastContainer, toast } from 'react-toastify';


export default function Card({course,likedCourses,setLikedCourses}){

    function handleClick(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev) => prev.filter((cid) => cid !==course.id));
            toast.warning("like removed");
        }
        else{
            if(likedCourses.length ===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=> [...prev ,course.id] )
            }
            toast.success("Liked")
        }

    }

    return(
        <div className="w-[300px] bg-[#0A1F44]/80  rounded-md overflow-hidden ">
            <div className="relative ">
                <img  src={course?.image?.url} alt="" />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute
                right-2 bottom-1 grid place-items-center " >
                    <button className="cursor-pointer" onClick={handleClick}>
                        {
                            likedCourses.includes(course.id) ?
                            <FcLike fontSize="1.75rem"/> :
                            <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>

             </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                    course.description.length > 100 ?
                    course.description.substr(0,100) + "...." :
                    course.description
                    
                    }
                    </p>
            </div>

        </div>
    )
}