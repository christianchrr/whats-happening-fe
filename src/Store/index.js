import React, { createContext, useReducer } from 'react'
import rootReducer from './rootReducer'

const initialState = {
    locaitonList: [],
    eventList: []
}

const StoreAction = ({ children }) => {

    const [state, dispatch] = useReducer(rootReducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
    
}

export const Context = createContext(initialState)
export default StoreAction