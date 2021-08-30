import React from 'react'
import styled from 'styled-components'

import { Header } from '../Components'
import image from '../Images/Image-1.jpeg'


const About = () => {

    return (
        <Wrapper className="page">
            <Header title="About" />
            <section className="section">
                <img src={image} alt="" />
                <article>
                    <h2 className="title">Our Story</h2>
                    <div className="underline"></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatum itaque in natus dolores et, perspiciatis, doloremque similique excepturi numquam molestias voluptatem assumenda illo consequuntur? Cum deleniti quos maiores doloribus voluptate a? Voluptatem mollitia tempore ab cupiditate quibusdam aliquid quis officiis voluptatum possimus tenetur officia sapiente alias iure error amet repellendus repellat, necessitatibus libero aliquam, distinctio accusamus, modi ipsa debitis? Odio facilis quisquam explicabo. Sapiente et repudiandae harum minus. Alias quisquam dicta nisi voluptatum necessitatibus officia odio labore fugiat neque.
                    </p>
                </article>
            </section>
        </Wrapper>
    )

}


const Wrapper = styled.main `

    img {
        max-height: 550px;
        margin: 0 auto;
    }

    .title {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        text-align: center;
    }

    p {
        font-size: 1rem;
        line-height: 1.9;
    }

    @media all and (min-width: 950px) {
        section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 4rem
        }
        .title {
            margin-top: 0;
            text-align: unset;
        }
        .underline {
            margin-left: 0;
            margin-right: 0;
        }
    }

`


export default About
