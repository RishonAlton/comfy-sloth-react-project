import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useHistory, Link } from 'react-router-dom'

import { Header, Loading, Error, Images, Stars, AddToCart } from '../Components'
import { useProductsContext } from '../Context/ProductsContext'
import { productInfoURL } from '../Utils/constants'
import { formatPrice } from '../Utils/helpers'


const ProductInfo = () => {

    const { id } = useParams()
    const history = useHistory()
    const { productInfoLoading: loading, productInfoError: error, productInfo, fetchProductInfo } = useProductsContext()

    useEffect(() => {
        fetchProductInfo(productInfoURL + id)
        // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        if(error) {
            setTimeout(() => {
                history.push("/")
            }, 3000)
        }
        // eslint-disable-next-line
    }, [error])

    if(loading) {
        return (
            <Wrapper>
                <Loading />
            </Wrapper>
        )
    }

    if(error) {
        return (
            <main
                style={{
                    minHeight: "calc(100vh - 8rem)",
                    marginTop: "-2rem",
                    display: "grid",
                    placeItems: "center"
                }}
            >
                <Error />
            </main>
        )
    }

    const { id: sku, name, price, images, company, stock, stars, reviews } = productInfo

    return (
        <Wrapper>
            <Header title={name} products />
            <section className="section">
                <Link to="/products" className="button">Back to Products</Link>
                <article>
                    <Images images={images} className="images" />
                    <div className="product-info">
                        <h2>{name}</h2>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className="price">{formatPrice(price)}</h5>
                        <p className="description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sit deleniti rerum quisquam, vel debitis ipsa minima autem optio ut veniam molestias aliquam necessitatibus placeat corporis libero nam repudiandae! Repudiandae nostrum harum at vitae quasi in ducimus distinctio vel ratione explicabo expedita, ipsam natus iusto praesentium, sint alias itaque mollitia.
                        </p>
                        <div className="details">
                            <p>
                                <span>Available:</span>
                                {stock > 0 ? "In Stock" : "Out of Stock"}
                            </p>
                            <p>
                                <span>SKU:</span>
                                {sku}
                            </p>
                            <p>
                                <span>Brand:</span>
                                {company}
                            </p>
                        </div>
                        <hr />
                        {
                            (stock > 0) && <AddToCart productInfo={productInfo} />
                        }
                    </div>
                </article>
            </section>
        </Wrapper>
    )

}


const Wrapper = styled.main `

    min-height: calc(100vh - 20rem);

    article {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3rem 4rem;
    }

    .price {
        color: var(--primary-500);
        font-size: 1.25rem;
    }

    .description {
        color: var(--gray-700);
        line-height: 2;
    }

    .details {
        margin-top: 1.25rem;
        p {
            text-transform: capitalize;
            display: grid;
            grid-template-columns: 125px 1fr;
            color: var(--gray-700);
            word-wrap: break-word;
            word-break: break-all;
            span {
                font-weight: bold;
            }
        }
    }

    @media all and (min-width: 900px) {
        article {
            grid-template-columns: 1fr 1fr;
        }
    }

`


export default ProductInfo
