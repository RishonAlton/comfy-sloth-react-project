import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Header = ({title, products}) => {

    return (
        <Wrapper>
            <div className="section">
                <h3>
                    <Link to="/" className="link">
                        Home 
                    </Link>
                    {
                        products && <Link to="/products" className="link"> / Products</Link>
                    }
                    <span> / {title}</span>
                </h3>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.header `

    background: var(--primary-100);
    height: 10rem;

    div {
        height: 100%;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
    
    h2 {
        color: var(--primary-800);
    }

    .link {
        color: var(--primary-600);
        transition: var(--transition);
        &:hover {
            color: var(--primary-800);
        }
    }

`


export default Header
