import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'


const Stars = ({ stars, reviews }) => {

    const newStars = Array.from({length: 5}, (_, index) => {
        return (
            <span key={index}>
                {
                    (stars >= index + 1) ? <BsStarFill /> : (stars >= index + 0.5) ? <BsStarHalf /> : <BsStar />
                }
            </span>
        )
    })

    return (
        <Wrapper>
            <div className="stars">{newStars}</div>
            <p>({reviews} customer reviews)</p>
        </Wrapper>
    )

}


const Wrapper = styled.div `

    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;

    .stars {
        color: #ffb900;
        font-size: 1rem;
        margin-right: 0.5rem;
    }

    span {
        margin-right: 0.25rem;
    }

    p {
        margin: 0;
        font-size: 1rem;
        color: var(--gray-800);
    }

`


export default Stars
