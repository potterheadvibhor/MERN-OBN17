import { NavBar } from "./Navbar";

export function Product()
{
    var productData=[]
    useEffect(()=>{

        async function getData() 
        {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
            productData=data
            console.log(productData)
        }
        getData()
    },[])
    return(
        <div>
        
        </div>
    )
}