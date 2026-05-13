
const initialCakeState={
    numOfCakes: 20
}



export const  cakeReducer  =  (state=initialCakeState,action)=>{
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