import React, { useContext, useReducer } from "react"

import reducer from "../Reducers/sidebarReducer"
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../Reducers/actions"


const SidebarContext = React.createContext()

const initalState = {
    isSidebarOpen: false,
}


const SidebarProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initalState)

    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR})
    }

    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR})
    }

    return (
        <SidebarContext.Provider value={
            {
                ...state,
                openSidebar,
                closeSidebar
            }
        }
        >
            {children}
        </SidebarContext.Provider>
    )
    
}


const useSidebarContext = () => {

    return useContext(SidebarContext)

}


export {
    SidebarProvider,
    useSidebarContext
}