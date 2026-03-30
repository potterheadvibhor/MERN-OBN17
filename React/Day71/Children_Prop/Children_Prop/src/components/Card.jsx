export function Card({imgSrc,name,price,Children})
{
   return(
    <div style={{
        border:"2px solid black",
        width:"fit-content",
        height:"fit-content"
        }}>
        <img src={imgSrc} alt=""></img>
        {Children}
    <div>
        <h1>{name}</h1>
        <span>$ {price}</span>
    </div>
    </div>

   )
       
}