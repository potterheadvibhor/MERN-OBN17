import {useParams} from 'react-router-dom'
export function User()
{
    const {username}=useParams()
    return(
        <div>User is {username}</div>
    )
}