import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'


const AmountButtons = ({ amount, increase, decrease }) => {

    return (
        <Wrapper>
            <button type="button" className="amount-button" onClick={decrease}>
                <FaMinus />
            </button>
            <h2 className="amount">{amount}</h2>
            <button type="button" className="amount-button" onClick={increase}>
                <FaPlus />
            </button>
        </Wrapper>
    )

}


const Wrapper  = styled.div ` 

    display: grid;
    max-width: 140px;
    gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    .amount-button {
        background: transparent;
        border: none;
    }

    h2 {
        margin: 0;
    }

`


export default AmountButtons
