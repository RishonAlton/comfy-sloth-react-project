import React from 'react'
import styled from 'styled-components'


const Footer = () => {

    return (
        <Wrapper>
            <h5>
                &copy; {new Date().getFullYear()} 
                <span>Comfy Sloth</span>
            </h5>
            <h5>All Rights Reserved</h5>
        </Wrapper>
    )

}


const Wrapper = styled.footer `

    height: 5rem;
    background: var(--black);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
        font-weight: normal;
        &:last-child {
            margin-bottom: 0;
        }
    }

    span {
        color: var(--primary-500);
        margin-left: 1rem;
    }

`


export default Footer
