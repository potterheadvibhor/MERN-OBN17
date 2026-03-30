
export function VisiblityButton({setShowCounter})
{
    return(
        <div className="border rounded-lg shadow-md w-15 flex justify-center w-20 hover:bg-[#90979c]">
            <button 
            onClick={() => setShowCounter(prev => !prev)}
            type="button">Visible</button>
        </div>
    )
}