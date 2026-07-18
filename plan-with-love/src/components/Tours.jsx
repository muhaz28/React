import Card from "./Card"

export default function Tours({tours , remove}){

    return(
        <div className="container">

            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={remove}/>
                    })
                }
            </div>


        </div>
    )
}