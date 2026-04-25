import { Link } from "react-router-dom";

export function NavBar()
{
    return(
        <>
        <nav>
            <h1>Logo</h1>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
        </>
    )
}