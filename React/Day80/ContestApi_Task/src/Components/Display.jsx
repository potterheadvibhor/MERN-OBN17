import {MyCountContext} from '../App'
import {useContext} from 'react'
export function Display()
{
    
    const {count}=useContext(MyCountContext)
    console.log(count)
    return(
        <div className='bg-green-200'>
          {count}
        </div>
    )
}