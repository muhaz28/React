export default function Filter({filterData ,category,setCategory}){

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="w-11/12 flex flex-wrap max-w-max  space-x-4 mx-auto  py-4  justify-center">
            {filterData.map( (data)=>{
                return <button onClick={()=>filterHandler(data.title)}  className={`text-lg py-1 px-2 font-medium  text-white rounded-md  bg-black  hover:bg-white hover:text-black
                 cursor-pointer border-2 transition-all duration-300
                ${category === data.title ? "bg-black  hover:bg-white hover:text-black"  : "bg-black border-transparent " }
                `}
                 key={data.id}>
                    {data.title}
                </button>
            })}
        </div>
    )
}