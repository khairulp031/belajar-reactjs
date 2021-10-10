import React from 'react'
import { initialData, reducers } from './reducer'

const AppContext = React.createContext([initialData, function () { }])
export function useContext() {
    return React.useContext(AppContext)
}
function Provider(props) {
    const [store, dispatch] = React.useReducer(reducers, initialData)
    return (
        <AppContext.Provider value={[store, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Provider
