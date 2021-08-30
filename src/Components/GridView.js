import React from 'react'
import styled from 'styled-components'

import Product from './Product'


const GridView = ({products}) => {

    return (
        <Wrapper>
            {
                products.map(product => <Product key={product.id} {...product} />)
            }
        </Wrapper>
    )

}


const Wrapper = styled.div `

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;

    @media all and (max-width: 300px) {
        grid-template-columns: 1fr;
    }

`


export default GridView
