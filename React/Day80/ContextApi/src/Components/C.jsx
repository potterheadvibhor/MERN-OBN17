import {MyContext} from '../App'
import {useContext} from 'react'
export function C()
{
    console.log(MyContext);
   const{name,age,phoneNo}= useContext(MyContext)
    return(
        <>
        <h1>Hello My Name Is {name} And My Age Is {age} And my ContactNo is {phoneNo}</h1>
        </>
    )
}