
const { createStore, applyMiddleware } = require("redux")
const thunk = require("redux-thunk").thunk

const API= "https://jsonplaceholder.typicode.com/users/"

const FETCH_USERS = "FETCH_USERS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

//Action Creator Return action
function fetch_users_request()
{
    return(
        {
            type:FETCH_USERS
                }
    )
}
function fetch_users_success(data)
{
    return(
        {
            type:FETCH_USERS_SUCCESS,
            payload:data
                }
    )
}
function fetch_users_failure(error)
{
    return(
         {
            type:FETCH_USERS_FAILURE,
            payload:error
                }
    )
}



//Thunk Function because this return a function
function fetchUsers()
{
    return function(dispatch)
    {
        dispatch(fetch_users_request())
        fetch(API)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            dispatch(fetch_users_success(data))
        })
        .catch((error)=>{
            dispatch(fetch_users_failure(error.message))
        })

    }
}


//Initial State
const initialState={
    loading:false,
    data:[],
    error:null
}


//reducers
function reducer(state=initialState,action)
{
   switch(action.type){
     case FETCH_USERS:
        return{
            ...state,
            loading:true
        }
     case FETCH_USERS_SUCCESS:
        return{
            ...state,
            loading:false,
            data:action.payload
        }
     case FETCH_USERS_FAILURE:
        return{
            ...state,
            loading:false,
            error:action.payload
        }
        default:
            return state
        
        }
    
}


//Thunk middleware allows dispatching functions instead of objects.
const store=createStore(reducer,applyMiddleware(thunk))


console.log("Intial State ",store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("State is ", store.getState())
})

//Thunk middleware allows dispatching functions instead of objects.
store.dispatch(fetchUsers())



//it remove the listeners
// unsubscribe()