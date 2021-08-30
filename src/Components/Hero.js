import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import mainImage from '../Images/Image-1.jpeg'
import secondaryImage from '../Images/Image-2.jpeg'


const Hero = () => {

    return (
        <Wrapper className="section">
            <article>
                <h1>
                    Design your
                    <br />
                    Comfort Zone
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                </p>
                <Link to="/products" className="button">
                    Shop Now
                </Link>
            </article>
            <article className="images">
                <img src={mainImage} alt="" className="main-image" />
                <img src={secondaryImage} alt="" className="secondary-image" />
            </article>
        </Wrapper>
    )

}


const Wrapper = styled.section `

    min-height: 60vh;
    display: grid;
    place-items: center;
    margin: 0 auto;

    h1 {
        margin: 0;
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.25rem;
        line-height: 1.9;
        margin-bottom: 2rem;
    }

    .button {
        padding: 0.75rem 1.25rem;
        font-size: 1rem;
    }

    .images {
        display: none;
        position: relative;
        &::before {
            content: " ";
            position: absolute;
            bottom: 0;
            left: -2rem;
            width: 100%;
            height: 80%;
            background: var(--primary-200);
            z-index: -1;
            border-radius: var(--border-radius);
        }
    }

    .main-image {
        height: 550px;
        border-radius: var(--border-radius);
    }

    .secondary-image {
        width: 250px;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateX(-50%);
        border-radius: var(--border-radius);
    }

    @media all and (max-width: 350px) {
        margin-top: 2rem;
        h1 {
            font-size: 2rem;
        }
    }

    @media all and (min-width: 950px) {
        min-height: calc(100vh - 5rem);
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5rem;
        .images {
            display: block;
        }
    }

    @media all and (max-width: 275px) {
        p {
            font-size: 1rem;
        }
    }

`


export default Hero
