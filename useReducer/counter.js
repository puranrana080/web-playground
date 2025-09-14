import React ,{useReducer} from "react";

function counterReducer(state,action){
    switch(action.type){
        case 'Increment':
            return {count:state.count+1};
        case 'Decrement':
            return {count:state.count-1}
        default:
            return state;
    }
}


export default function Counter(){
    const [state,dispatch] = useReducer(counterReducer,{count:0})
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:'Increment'})}>+</button>
            <button onClick={()=>dispatch({type:'Decrement'})}>-</button>
        </div>
    )
}