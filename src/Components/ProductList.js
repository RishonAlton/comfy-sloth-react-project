import React from 'react'
import styled from 'styled-components'

import { useFilterContext } from '../Context/FilterContext'
import GridView from './GridView'
import ListView from './ListView'


const ProductList = () => {

    const { filteredProducts: products, gridView } = useFilterContext()

    if(products.length === 0) {
        return (
            <Wrapper>
                <h3>Sorry, no products matched your search</h3>
            </Wrapper>
        )
    }

    if(!gridView) {
        return <ListView products={products} />
    }

    return (
        <GridView products={products} />
    )

}


const Wrapper = styled.div `

    display: grid;
    place-items: center;
    min-height: 10rem;

    h3 {
        font-weight: normal;
        margin: 0;
    }

`


export default ProductList
