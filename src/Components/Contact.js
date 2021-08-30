import React from 'react'
import styled from 'styled-components'


const Contact = () => {

    return (
        <Wrapper className="section">
            <h3>Join our Newsletter and get 20% off</h3>
            <article>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                </p>
                <form action="https://formspree.io/f/mvodvjgy" method="POST">
                    <input type="email" placeholder="Enter Email" name="Comfy Sloth Contact Form" required />
                    <button type="submit">Subscribe</button>
                </form>
            </article>
        </Wrapper>
    )

}


const Wrapper = styled.section `

    h3 {
        margin-bottom: 2rem;
    }

    p {
        max-width: var(--fixed-width);
        margin: 0;
        font-size: 1rem;
        line-height: 1.7;
    }

    form {
        display: grid;
        grid-template-columns: 1fr auto;
        max-width: 500px;
        margin: 0 auto;
        margin-top: 2rem;
    }

    input {
        font-size: 1rem;
        padding: 0.5rem 0.75rem;
        border-radius: var(--border-radius);
        border: 2px solid var(--black);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        outline: none;
    }

    input::placeholder {
        color: var(--black);
    }

    button {
        border: 2px solid var(--black);
        border-radius: var(--border-radius);
        font-size: 1rem;
        letter-spacing: var(--letter-spacing);
        background: var(--primary-500);
        padding: 0.5rem 0.75rem;
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        transition: var(--transition)
    }

    button:hover {
        color: white;
    }

    @media all and (min-width: 800px) {
        article {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 8rem;
            align-items: center;
        }
        form {
            margin-top: 0;
        }
    }

    @media all and (max-width: 400px) {
        input {
            width: 100%;
        }
    }

    @media all and (min-width: 900px) {
        padding-bottom: 5rem;
    }

`


export default Contact
