export function NavBar({isSetDarkMode})
{
    return (
        <div className="border w-screen h-10 ">
            <botton 
            onClick={()=>
                {
                    isSetDarkMode(false)
                }
            }
            className="border bg-white p-2 m-2">Light</botton>
            <botton 
            onClick={()=>
                {
                    isSetDarkMode(true)
                }
            }
            className="border bg-White p-2 m-2">Dark</botton>
        </div>
    )

}