import React from 'react'
import styled from 'styled-components'


const CartColumns = () => {

    return (
        <Wrapper>
            <div className="content">
                <h5>Item</h5>
                <h5>Price</h5>
                <h5>Quantity</h5>
                <h5>Subtotal</h5>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    )

}


const Wrapper = styled.article ` 

    .content {
        display: grid;
        grid-template-columns: 315px 1fr 1fr 1fr auto;
        grid-gap: 1rem;
        justify-items: center;
    }

    h5 {
        color: var(--gray-500);
        font-weight: normal;
    }

    span {
        width: 2rem;
        height: 2rem;
    }

    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }

    @media all and (max-width: 775px) {
        display: none;
    }

`


export default CartColumns
