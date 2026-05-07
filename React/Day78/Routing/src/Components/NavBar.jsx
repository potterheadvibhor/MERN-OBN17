import { Link,useNavigate } from "react-router-dom";

export function NavBar()
{

    const navigate=useNavigate()
    return(
        <>
        <nav>
            <h1>Logo</h1>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
                <div  onClick={()=>{
                    navigate("/demo")
                }} style={{background:'red'}}> Go To DEMO</div>

                <button
                onClick={()=>{
                    navigate("/demo")
                }}
                >Go To Demo</button>
            </div>
        </nav>
        </>
    )
}