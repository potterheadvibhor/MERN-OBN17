export function NavBar() {
    return (
        <div className="flex justify-between items-center px-6 py-3 bg-gray-800 text-gray-100 shadow-md">
            
           
            <h1 className="text-lg font-semibold">Logo</h1>

          
            <div className="flex gap-6">
                <button className="hover:text-gray-300 transition">Products</button>
                <button className="hover:text-gray-300 transition">Search</button>
                <button className="hover:text-gray-300 transition">Cart</button>
                <button className="hover:text-gray-300 transition">Account</button>
            </div>

        </div>
    )
}