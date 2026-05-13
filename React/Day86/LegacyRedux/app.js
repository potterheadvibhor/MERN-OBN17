const { createStore, combineReducers, applyMiddleware } = require("redux")
const  reduxlogger= require("redux-logger")
const logger= reduxlogger.createLogger()

const BUY_CAKE="BUY_CAKE"
const RESTORE_CAKE="RESTORE_CAKE"
const BUY_ICECREAM="BUY_ICECREAM"
const RESTORE_ICECREAM="RESTORE_ICECREAM"


//Action Creator

function buyCake(quantity)
{
    return  {               //This Object here is the Actual Action
        type:BUY_CAKE,
        payload: quantity || 1
    }
}

function restoreCake(quantity)
{
    return{                     //This Object here is the Actual Action
        type:RESTORE_CAKE,
        payload: quantity || 1
    }
}

function byIceCream(quantity)
{
    return  {               //This Object here is the Actual Action
        type:BUY_ICECREAM,
        payload: quantity || 1
    }
}

function restoreIceCream(quantity)
{
    return{                     //This Object here is the Actual Action
        type:RESTORE_ICECREAM,
        payload: quantity || 1
    }
}


const initialCakeState={
    numOfCakes: 20
}

const initialIceCreamState={
    numOfIceCreame: 20
}


const  cakeReducer  =  (state=initialCakeState,action)=>{
    switch(action.type)
    {
      case BUY_CAKE:
            if(state.numOfCakes>= action.payload)
            {
                  return {
                    numOfCakes: state.numOfCakes-action.payload
                  }
            }
            else
            {
                return {
                    numOfCakes: state.numOfCakes-1
                  }
            }
      case RESTORE_CAKE:
            if(state.numOfCakes>= action.payload)
            {
                  return {
                    numOfCakes: state.numOfCakes+action.payload
                  }
            }
            else
            {
                return {
                    numOfCakes: state.numOfCakes+1
                  }
            }
        default:
            return state
    }
}

const  iceCreameReducer  =  (state=initialIceCreamState,action)=>{
    switch(action.type)
    {
      case BUY_ICECREAM:
            if(state.numOfIceCreame>= action.payload)
            {
                  return {
                    numOfIceCreame: state.numOfIceCreame-action.payload
                  }
            }
            else
            {
                return {
                    numOfIceCreame: state.numOfIceCreame-1
                  }
            }
      case RESTORE_ICECREAM:
            if(state.numOfIceCreame>= action.payload)
            {
                  return {
                    numOfIceCreame: state.numOfIceCreame+action.payload
                  }
            }
            else
            {
                return {
                    numOfIceCreame: state.numOfIceCreame+1
                  }
            }
        default:
            return state
    }
}



const rootReducer=combineReducers({cakeReducer,iceCreameReducer})


const store=createStore(rootReducer,applyMiddleware(logger))   //aply middlewear

console.log("Intial Store State",store.getState())


//subscripe runs everytime there is any change in store or state it return an  method
//   const unsubscribe= store.subscribe(()=> console.log("store State after any  Sold",store.getState()))


//dispathcher
 store.dispatch(buyCake(2))
 store.dispatch(byIceCream(2))
//  store.dispatch(restoreCake(2))
//  store.dispatch(buyCake())
//  store.dispatch(restoreCake())


 // this let you unsubscribe from all update abot store
// unsubscribe()

//   store.dispatch(restoreCake())
//   console.log(store.getState())


