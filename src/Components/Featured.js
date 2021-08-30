import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useProductsContext } from '../Context/ProductsContext'
import Loading from './Loading'
import Product from './Product'
import Error from './Error'


const Featured = () => {

    const { productsLoading: loading, productsError: error, featured } = useProductsContext()

    if(loading) {
        return (
            <Wrapper>
                <Loading />
            </Wrapper>
        )
    }

    if(error) {
        return (
            <Wrapper>
                <Error />
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <article className="section">
                <h2>Featured Products</h2>
                <div className="underline"></div>
                <div className="products">
                    {
                        featured
                            .map(product => <Product key={product.id} {...product} />)
                            .slice(0, 3)
                    }
                </div>
                <Link to="/products" className="button">All Products</Link>
            </article>
        </Wrapper>
    )

}


const Wrapper = styled.section `

    background: var(--gray-100);
    margin-top: 3rem;
    padding: 1rem 0;

    .loading {
        margin-top: 0;
    }

    h2 {
        text-align: center;
        margin-top: 0;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 2rem;
    }

    .button {
        margin: 3rem auto;
        margin-bottom: 0;
    }

    @media all and (max-width: 340px) {
        .products {
            grid-template-columns: 1fr;
        }
    }

`


export default Featured
