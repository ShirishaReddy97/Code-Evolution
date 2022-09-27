import React, { useReducer } from 'react'
const initialCount = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialCount
        default:
            return state
    }
}
function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialCount)
    return (
        <div>
            <button>Count : {count}</button><br/>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
