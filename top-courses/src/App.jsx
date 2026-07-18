import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Filter from './components/Filter.jsx'
import Cards from './components/Cards.jsx'
import Spinner from './components/Spinner.jsx'
import {apiUrl,filterData} from "./data.js"
 import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [courses,setCourses] = useState(null)
  const [spinner,setSpinner]  = useState(true);
  const [category,setCategory] = useState(filterData[0].title)


   async function fetchData() {
      setSpinner(true);
      try{ 
        const res  = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);

      }
      catch(e){
        toast.error("Error Fetching Data");

      }
      setSpinner(false);
    }

  useEffect( ()=>{
    fetchData();
  },[]);

  return (

    <div className='min-h-screen flex flex-col bg-[#1e293b]/90'>
      <div>
        <Navbar/>
      </div>
      
      <div>

         <div>
        <Filter filterData ={filterData} category={category} setCategory={setCategory}/>
      </div>
      
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center
      min-[50vh] '>
        {spinner ? <Spinner/> :  <Cards courses={courses} category={category}/>} 
      </div>


      </div>

     
      

    </div>
  )
}

export default App
