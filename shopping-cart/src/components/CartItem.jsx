import { MdOutlineDelete } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux"
import {add,remove} from "../features/cart/cartSlice.js"


export default function CartItem({item,itemIndex}){
      const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(item.id));
        toast.success("item removed from cart")
    }

    return(

        <div>


            <div>
                <div>
                    <img src={item.image} alt="" />
                </div>

                <div>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>

                </div>

                <div>
                    <p>{item.price}</p>

                    <div onClick={removeFromCart}>
                        <MdOutlineDelete  />

                    </div>

                </div>

            </div>



        </div>
    )
}