import {MyCountContext} from '../App'
import {useContext} from 'react'
export function Button()
{
    const {count,setCount}=useContext(MyCountContext)
    return(
        <div className='bg-blue-200'>
            <button onClick={()=> setCount(prev=> prev+1)}>➕</button>
            <button onClick={()=> setCount(prev=> prev=0)}>®️</button>
            <button onClick={()=> setCount(prev=> prev-1)}>➖</button>
        </div>
    )
}


