import React, { createContext, useContext, useReducer } from 'react'

// Preparing data layer by creating context where the actually data live
export const StateContext = createContext()

// higher order component which takes three things
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// provides the state
export const useStateValue = () => useContext(StateContext)
