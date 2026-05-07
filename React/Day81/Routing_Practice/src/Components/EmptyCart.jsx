import {NavLink} from 'react-router-dom'
import { Product } from './Product'
export function EmptyCart() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">
          Your Cart is Empty
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Looks like you haven’t added anything yet.
        </p>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <NavLink to={"/Product"} className={({isActive})=> isActive? "text-yellow-200":""}>Browse Products</NavLink>
          
        </button>
      </div>
    </div>
  );
}