export function NavBar()
{
    return(
        <div className="flex justify-between bg-[#FFC801] p-3 h-[50pw] border-2">
            <h1>ToDoList</h1>
            <div className="flex gap-3">
            <button className="bg-orange-500 p-2 text-white py-2 rounded-md shadow-md hover:bg-[#A38000]  transition">Drak</button>
            <button className="bg-orange-500 p-2 text-white py-2 rounded-md shadow-md hover:bg-[#A38000]  transition">Light</button>
            </div>
            
        </div>
    )
}