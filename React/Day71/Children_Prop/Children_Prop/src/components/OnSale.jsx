export function OnSale({children})
{
    return(
        <div > 
        <span style={{
        backgroundColor:"red",
        position:"absolute"}} >sale</span>
            {children}
        </div>
    )
}