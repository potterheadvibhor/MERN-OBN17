import {Link} from "react-router-dom"
export function NavBar()
{
    return(
        <nav style={
            {display:"flex",
             justifyContent:"space-between",
            backgroundColor:"orange",
            borderRadius:"5px",
            padding:"5px"
            }
            }>
            <div>
                <Link to="/"><h1>NavBar</h1></Link>
              
            </div>
            <div style={
            {display:"flex",
             gap:"20px",
             padding:"5px"
            }
            }>
                <Link to="/harry">Harry</Link>
                <Link to="/product">Prouduct</Link>
                <Link to="/user">User</Link>
               
            </div>
        </nav>
        
    )
}