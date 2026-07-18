import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Pagination(){

    const {page ,handlePageChange,totalPages}  = useContext(AppContext);

    return (
        <div className=" w-full border-1 py-3 fixed bottom-0 bg-white shadow"> 

            <div className="max-w-[650px] mx-auto flex justify-between ">

                <div className=" flex gap-x-2">
                    { page > 1 &&
                    (<button className="rounded-md border-1 cursor-pointer px-4 py-1"
                     onClick={ ()=> handlePageChange(page-1) }>
                        Previous
                    </button>)
                }


                {
                    page < totalPages && 
                    (<button className="rounded-md border-1 cursor-pointer  px-4 py-1"
                     onClick={ () => handlePageChange (page + 1)}>
                        Next
                    </button>)
                }


                </div>
                

                <p className="font-bold text-sm">
                    Page {page} of {totalPages}
                </p>
            </div>
            
        </div>
    )
}