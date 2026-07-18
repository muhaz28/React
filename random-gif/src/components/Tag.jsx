import { useEffect, useState } from "react"
import axios from "axios";
import "../app.css"
import Spinner from "./Spinner.jsx"
import useGif from "../hooks/useGif.jsx"


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;





export default function Tag(){


    // const [gif,setGif] = useState(null);

    // const [loading,setLoading] =useState(false);


    const [tag,setTag]  = useState("wwe");

    function changeHandler(e){
        setTag(e.target.value);

    }
    


    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource= data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
        
    // }


    // useEffect(()=>{
    //     fetchData();
    // },[]);

     const {gif,loading,fetchData} = useGif(tag);


    function clickhandler(){
        fetchData();

    }

    return(
        <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col
        items-center gap-y-5 mt-[15px]
        ">

            <h1 className="text-2xl mt-[15px] underline  uppercase font-bold"> Random {tag} Gif</h1>

            {
                loading ? <Spinner/>  :  <img src={gif}  alt="" width="450" />
            }

            <input
            onChange={changeHandler}
            type="text"
            value={tag} 
            className="w-10/12 cursor-pointer outline-green-500 mb-[5px] bg-white/80 text-lg py-2 rounded-lg text-center "/>
           

            <button className="w-10/12 cursor-pointer mb-[20px] bg-white/80 text-lg py-2 rounded-lg"
            onClick={clickhandler}>
                Generate</button>

        </div>
    )
}