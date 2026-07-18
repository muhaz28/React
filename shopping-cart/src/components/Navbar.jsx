import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


export default function Navbar(){

    const {cart} = useSelector((state) => state);

    return(
        <div >

            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                    <div className=" ml-5">
                        <img src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fHww" alt="" 
                        height={100} width={100} />
                    </div>
                </NavLink>

                <div className=" flex items-center font-medium text-slate-100
                mr-5 space-x-6">

                    <NavLink to="/">
                         <p>Home</p>

                    </NavLink>

                    <NavLink to="/cart" >
                       <div className="relative">
                         <FaShoppingCart className="
                         text-2xl" />
                         {
                            cart.length > 0 && <span
                            className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5
                            flex justify-center items-center animate-bounce  rounded-full text-white">{cart.length}</span>
                         }
                         
                       </div>
                    </NavLink>
                   

                </div>

            </nav>

        </div>
    )
}