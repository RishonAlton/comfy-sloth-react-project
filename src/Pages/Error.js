import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Error = () => {

    return (
        <Wrapper className="page">
            <div>
                <h1>404</h1>
                <h3>Sorry, the Page you tried cannot be found</h3>
                <Link to="/" className="button">Back Home</Link>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.main `

    background: var(--primary-100);
    display: grid;
    place-items: center;
    text-align: center;

    h1 {
        font-size: 10rem;
    }

    .button {
        margin: 2rem auto;
    }

    @media all and (max-width: 300px) {
        h1 {
            font-size: 6rem;
        }
    }

`


export default Error
