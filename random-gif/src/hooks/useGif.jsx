import { useEffect, useState } from "react"
import axios from "axios";
import "../app.css"
import Spinner from "../components/Spinner.jsx"



const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;







export default function useGif(tag){

const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


    const [gif,setGif] = useState(null);

    const [loading,setLoading] =useState(false);


    
    


    async function fetchData(){
        setLoading(true);
       
        const {data} = await axios.get(tag ? tagUrl : randomUrl);
        const imageSource= data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
        
    }


    useEffect(()=>{
        fetchData();
    },[]);

    return {gif,loading,fetchData};
   
}

