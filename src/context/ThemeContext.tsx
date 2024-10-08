"use client"

import { createContext, useEffect, useReducer } from "react"

type StateType = {
    theme: string,
    fontSize: number,
    currentPage: string,
}

// Discriminated Unions
type ColorActionType = {
    type: "CHANGE_THEME"
}
type SizeActionType = {
    type: "CHANGE_FONTSIZE",
    payload: number,
}
type SetThemeActionType = {
    type: "SET_THEME",
    theme: string,
}
type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE",
    currentPage: string,
}
//

type ActionType = ColorActionType | SizeActionType | SetThemeActionType | SetCurrentPageActionType

const INITIAL_STATE = {
    theme: "dark",
    fontSize: 16,
    currentPage: "/",
}

export const ThemeContext = createContext<{ state: StateType; dispatch: React.Dispatch<ActionType> }> ({
    state: INITIAL_STATE,
    dispatch: () => {},
})

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
            }

        case "CHANGE_FONTSIZE":
            return {
                ...state,
                fontSize: action.payload,
            } 

        case "SET_THEME":
            return {
                ...state,
                theme: action.theme,
            }
        
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            }

        default: 
            return state
    }
}


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const savedTheme = localStorage.getItem('theme')
          if (savedTheme) {
            dispatch({ type: 'SET_THEME', theme: savedTheme })
          }
        }
      }, [])

    return (
        <ThemeContext.Provider value={{ state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}