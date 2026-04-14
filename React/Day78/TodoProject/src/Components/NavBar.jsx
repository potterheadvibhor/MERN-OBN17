export function NavBar({darkMode,setDarkMode})
{
    return(
       <div className={'flex justify-between p-2' + (darkMode?" bg-black text-white ":" bg-[#F57799] ") }>
        <h1>TodoList</h1>
        <div >
            <ul className=" flex gap-4 ">
                <li>Home</li>
                <li>Facebook</li>
                <li>AboutUs</li>
            </ul>
            </div>
            <div className="flex gap-4 bg-[FFB399]">
                <button onClick={()=> setDarkMode(true)} className="">Dark</button>
                <button onClick={()=> setDarkMode(false)} className="">Light</button>
            </div>
       </div>
    )
}