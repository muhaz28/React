import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import BlogDetails from "../components/BlogDetails";

export default function BlogPage(){
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";


    const {loading,setLoading} = useContext(AppContext);
    
    const [blog,setBlog] =useState(null);
    const[relatedBlogs,setRelatedBlogs] = useState([]);


    const navigate =useNavigate();

    const location = useLocation();
    
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url  = `${newBaseUrl}get-blog?blogId=${blogId}`;

        try{
            const res = await fetch(url);
            const data= await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }

        catch(e){
            setBlog(null);
            setRelatedBlogs([]);
        }        

        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs()
        }
    },[location.pathname]);

    return(
        <div>
            <Header/>
            
            <div>
                <button onClick={ ()=> navigate(-1)}>
                    back
                </button>
            </div>

            {
                loading ? <p>Loading</p> : 

                blog ? 
                
                <div>
                    <BlogDetails post={blog}/>

                    <h2>Related Blogs</h2>
                    {
                        relatedBlogs.map((post) =>(
                            <div key ={post.id}>
                                <BlogDetails post={post}/>
                            </div>
                        ))
                    }

                </div>



                : <p>No Blog Found</p>
            }



            
        </div>
    )
}