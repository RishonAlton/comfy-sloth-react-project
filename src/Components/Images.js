import React, { useState } from 'react'
import styled from 'styled-components'


const Images = ({ images = [{url: ""}] }) => {

    const [main, setMain] = useState(images[0])

    return (
        <Wrapper>
            <img src={main.url} alt="" className="main-image" />
            <div className="images-container">
                {
                    images.map((image, index) => {
                        return (
                            <img 
                                src={image.url} 
                                alt="" 
                                className={main.url === image.url ? "images active" : "images"}
                                key={index}
                                onClick={() => setMain(images[index])}
                            />
                        )
                    })
                }
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.div `

    .main-image {
        height: 60vw;
    }

    .images-container {
        margin: 0 auto;
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
        grid-gap: 1rem;
    }

    .images {
        height: 100%;
        width: 100%;
        border-radius: var(--border-radius);
        cursor: pointer;
        height: 75px;
    }

    .active {
        border: 3px solid var(--primary-500);
    }

    @media all and (min-width: 900px) {
        .main-image {
            height: 350px;
        }
    }

    @media all and (min-width: 1000px) {
        .main-image {
            height: 400px;
        }
    }

`


export default Images
