import React from 'react'
import styled from 'styled-components'


const Error = () => {

    return (
        <Wrapper className="section">
            <h2>There was an Error...</h2>
        </Wrapper>
    )

}


const Wrapper = styled.div `

    text-align: center;
    margin: 2rem auto;

    h2 {
        margin: 0;
    }

`


export default Error
