import { useDispatch, useSelector } from "react-redux"
import toast, { Toaster } from 'react-hot-toast';
import {add,remove} from "../features/cart/cartSlice.js"



export default function Product({post}){

    const dispatch = useDispatch();

    function addToCart(){
        dispatch(add(post));
        toast.success("item added to cart")
        
    }

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.success("item removed from cart")
    }

    const {cart} = useSelector((state)=> state);
    return(
        <div className="flex flex-col items-center justify-between cursor-pointer h-[380px]
        hover:scale-110 transition duration-300 ease-in shadow-[0_12px_35px_rgba(0,0,0,0.18)]
  hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)] gap-3 p-4 mt-10 ml-5 rounded-xl
  
">

            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40  mt-1
                ">{post.title}</p>
            </div>

            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split("").slice(0,70).join("") + "...."}</p>
            </div>

            <div className="h-[180px]">
                <img src={post.image} className="w-full h-full" alt="" />
            </div>



            <div className="flex  justify-between gap-12 items-center w-full mt-5">


                <div>
                <p className="text-green-600 font-semibold">${post.price}</p>
            </div>

            {
                cart.some((p) => p.id == post.id) ? 
                <button onClick={removeFromCart}
                className="text-gray-700 border-2 border-gray-700 rounded-full
                 text-[12px] p-1 px-3 uppercase cursor-pointer hover:bg-gray-700 hover:text-white
                transition duration-300 ease-in">
                    Remove Item
                </button>
                :
                <button
                className="text-gray-700 border-2 border-gray-700 rounded-full
                text-[12px] p-1 px-3 uppercase cursor-pointer hover:bg-gray-700 hover:text-white
                transition duration-300 ease-in "
                onClick={addToCart}>
                    Add To Cart
                </button>

            }




            </div>

            
            

        </div>
    )
}