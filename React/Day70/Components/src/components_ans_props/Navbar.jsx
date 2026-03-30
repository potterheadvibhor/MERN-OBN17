function Navbar()
{
    let NavbarStyle={backgroundColor:"black",
        display:"flex",
        justifyContent:"space-between",
        padding:"10px 20px ",
        marginRight:"10px",
        color:"white",
        width:"100%",
        height : "3vh"
        }
    let AnchorStyle={
        display:"flex",
        gap:"20px"
        
        }
    
    return(
        <nav style={NavbarStyle}>
            <h3>Logo</h3>
            <div style={AnchorStyle}>
                <a style={{textDecoration:"none",color:"whitesmoke"}} href="">FaceBook</a>
                <a style={{textDecoration:"none",color:"whitesmoke"}} href="">Instagram</a>
                <a style={{textDecoration:"none",color:"whitesmoke"}} href="">LinkDin</a>
            </div>
        </nav>
    )
}

export default Navbar