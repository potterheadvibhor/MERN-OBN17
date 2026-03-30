import { VisiblityButton } from "./VisiblityButton";

export function Navbar({setShowCounter})
{
    return (
        <div className="flex justify-between bg-[#1877F2] text-white p-[15px]">
            <h1 className="text-black Bold text-3xl">Counter</h1>
            <div className="flex gap-8 text-black">
                <a>Home</a>
                <a>History</a>
                <VisiblityButton setShowCounter={setShowCounter}/>
            </div>
        </div>
    )
}