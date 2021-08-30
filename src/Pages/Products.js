import React from 'react'
import styled from 'styled-components'

import { Header, ProductList, Sort, Filters, Loading } from '../Components'
import { useProductsContext } from '../Context/ProductsContext'


const Products = () => {

    const { productsLoading: loading } = useProductsContext()

    if(loading) {
        return (
            <main className="page-loading">
                <Loading />
            </main>
        )
    }

    return (
        <main className="page">
            <Header title="Products" />
            <Wrapper className="section">
                <Filters />
                <article className="products">
                    <Sort />
                    <ProductList />
                </article>
            </Wrapper>
        </main>
    )

}


const Wrapper = styled.section `

    margin-top: 4rem;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 3rem;

    @media all and (max-width: 600px) {
        grid-template-columns: 1fr;
    }

`


export default Products
