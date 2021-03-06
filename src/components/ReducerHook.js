// useReducer hook
import React, { useReducer } from 'react'

const ReducerHook = () => {


    const reducer = (state, action) => {
        switch (action.type) {
            case "increament":
                return { count: state.count + 1, showText: state.showText }
            case "decrement":
                return { count: state.count - 1, showText: state.showText }
            case "toggleShowText":
                return { count: state.count, showText: !state.showText }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });


    return (
        <>
            <h1 className='text-xl font-mono font-medium mt-9 bg-blue-600 text-white '>Reducer Hook</h1>
            <div className='flex mt-5 justify-center'>
                <button onClick={() => {
                    dispatch({ type: "decrement" });
                    dispatch({ type: "toggleShowText" });
                }} className='btn-bold'>-</button>
                <h1 className='text-xl font-medium mx-2 w-9'>{state.count}</h1>
                <button onClick={() => {
                    dispatch({ type: "increament" });
                    dispatch({ type: "toggleShowText" });
                }} className='btn-bold'>+</button>
            </div>
            {state.showText && <h1 className='text-xl font-medium mt-3'>The number is even</h1>}
            {!state.showText && <h1 className='text-xl font-medium mt-3'>The number is odd</h1>}
        </>
    )
}

export default ReducerHook