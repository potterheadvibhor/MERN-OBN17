export function Card({image,name,id})

{
     return (
          <div 
          
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >

            {/* Image */}
            <img 
              src={image || "https://plus.unsplash.com/premium_photo-1711987238385-fc2a6736fdb4"}
              alt={name}
              className="w-full h-40 object-cover"
            />

            {/* Name */}
            <h1 className="text-center text-sm font-medium p-2">
              {name}
            </h1>

          </div>
  

    
  )
}