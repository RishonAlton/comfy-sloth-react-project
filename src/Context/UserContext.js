import React, { useContext, useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"


const UserContext = React.createContext()


export const UserProvider = ({children}) => {

    const { loginWithRedirect, logout, user, error, isLoading } = useAuth0()
    const [currentUser, setCurrentUser] = useState(null) 

    useEffect(() => {
        setCurrentUser(user)
    }, [user])

    return (
        <UserContext.Provider 
            value={ {loginWithRedirect, logout, user, error, isLoading, currentUser} }
        >
            {children}
        </UserContext.Provider>
    )
    
}


export const useUserContext = () => {

    return useContext(UserContext)

}