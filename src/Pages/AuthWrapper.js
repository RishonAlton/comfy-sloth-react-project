import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

import { Loading } from '../Components'


const AuthWrapper = ({children}) => {

    const { isLoading, error } = useAuth0()

    if(isLoading) {
        return (
            <Wrapper>
                <Loading />
            </Wrapper>
        )
    }

    if(error) {
        return (
            <Wrapper>
                <h1>{error.message}</h1>
            </Wrapper>
        )
    }

    return (
        <>
            {children}
        </>
    )

}


const Wrapper = styled.section ` 

    display: grid;
    place-items: center;
    min-height: 100vh;

    .loading {
        margin: 0 auto;
    }

`


export default AuthWrapper
