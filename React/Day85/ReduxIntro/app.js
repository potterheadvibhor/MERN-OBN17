// Import createStore from redux
const { createStore } = require("redux")

// Action Type (constant to avoid typos)
const BUY_CAKE = "BUY_CAKE"


// ==================== ACTION CREATOR ====================
// Action = plain JavaScript object that describes "what happened"
// Action Creator = function that returns an action
function buyCake() {
    return {
        type: BUY_CAKE   // describes the action
    }
}


// ==================== INITIAL STATE ====================
// This is the starting state of your store
// Redux store always holds a single state tree
const initialCakeStore = {
    numOfCakes: 20
}


// ==================== REDUCER ====================
// Reducer = pure function (IMPORTANT)
// It takes current state + action → returns new state
function cakeReducer(state = initialCakeStore, action) {

    switch (action.type) {

        case BUY_CAKE:
            // NEVER mutate state directly in Redux
            // Always return a NEW object
            return {
                numOfCakes: state.numOfCakes - 1
            }

        default:
            // If action doesn't match, return current state
            return state
    }
}


// ==================== STORE ====================
// Store = holds the state + allows updates via dispatch
const store = createStore(cakeReducer)

// getState() → used to read current state
console.log("Initial: ", store.getState())


// ==================== SUBSCRIBE ====================
// subscribe() → runs callback whenever state changes
// Used for logging, UI updates, etc.
const unsubscribe = store.subscribe(() =>
    console.log("Cake Sold", store.getState())
)


// ==================== DISPATCH ====================
// dispatch() → sends action to reducer to update state

store.dispatch(buyCake()) // 19
store.dispatch(buyCake()) // 18
store.dispatch(buyCake()) // 17
store.dispatch(buyCake()) // 16
store.dispatch(buyCake()) // 15


// Stop listening to state changes
unsubscribe()


// These dispatches will NOT trigger subscribe callback
store.dispatch(buyCake()) // 14
store.dispatch(buyCake()) // 13
store.dispatch(buyCake()) // 12
store.dispatch(buyCake()) // 11
store.dispatch(buyCake()) // 10


// Final state
console.log(store.getState())