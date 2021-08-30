import React from 'react'
import styled from 'styled-components'

import { services } from '../Utils/constants' 


const Services = () => {

    return (
        <Wrapper>
            <article className="section">
                <div className="section-header">
                    <h3>
                        Custom Furniture
                        <br />
                        Built only for you
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                    </p>
                </div>
                <div className="services">
                    {
                        services.map(service => {
                            const { id, icon, title, text } = service
                            return (
                                <div className="service" key={id}>
                                    <span className="icon">{icon}</span>
                                    <h4>{title}</h4>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
        </Wrapper>
    )

}


const Wrapper = styled.section `

    background: var(--primary-100);
    padding: 1rem 0;

    .section {
        margin-bottom: 3rem;
    }

    .section-header {
        display: grid;
        align-items: center;
        grid-gap: 1rem;
    }

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
        color: var(--primary-700);
    }

    .services {
        margin: 0 auto;
        margin-top: 4rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }

    .service {
        background: var(--primary-300);
        padding: 2rem;
        text-align: center;
        border-radius: var(--border-radius);
    }

    .icon {
        background: white;
        font-size: 1.75rem;
        width: 3.5rem;
        height: 3.5rem;
        display: grid;
        place-items: center;
        border-radius: 50%;
        color: var(--primary-800);
        margin: 0 auto;
        margin-bottom: 1rem;
    }

    h4 {
        color: var(--primary-800);
    }

    @media all and (min-width: 600px) {
        .services {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media all and (min-width: 900px) {
        margin-bottom: 13rem;
        .section {
            margin-bottom: 0;
        }
        .section-header {
            grid-template-columns: 1fr 1fr;
        }
        .services {
            grid-template-columns: 1fr 1fr 1fr;
            transform: translateY(5rem);
            margin-top: 0;
        }
    }

`


export default Services
