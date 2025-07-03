const redux = require('redux')

const counterReducer = (state={counter:0},action)=>{
    if(action.type =='increment'){
        return {
            counter:state.counter+5
        }
    }
    if(action.type=='decrement'){
        return {
            counter:state.counter-1
        }
    }
    return state

}

const store=redux.createStore(counterReducer)

const counterubscriber = ()=>{
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterubscriber)

store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})
