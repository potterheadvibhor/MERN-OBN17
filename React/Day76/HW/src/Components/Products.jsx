import { Card } from "./Card";


export function Products({prodData})
{
    
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {prodData.map((item)=>{
                return(<Card name={item.title} image={item.thumbnail} id={item.id}/>)
            })
            }
        </div>
    )
    
}