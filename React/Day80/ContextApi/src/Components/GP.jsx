import { P } from "./P";
import {MyContext} from "../App"
import { useContext } from "react";

export function GP({name})
{
    const parenData=useContext(MyContext)
    const phoneNo=9935176298
    return(
        <MyContext.Provider value={{...parenData,phoneNo}}>
            <div>
                <h1>
                    {phoneNo}
                </h1>
<P/>
            </div>
             
        </MyContext.Provider>
    )
}