import React from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

import { useFilterContext } from '../Context/FilterContext'
import { getUniqueValues, formatPrice } from '../Utils/helpers'


const Filters = () => {

    const { filters: {text, category, company, color, price, minPrice, maxPrice, shipping}, updateFilters, clearFilters, allProducts } = useFilterContext()

    const categories = getUniqueValues(allProducts, "category")
    const companies = getUniqueValues(allProducts, "company")
    const colors = getUniqueValues(allProducts, "colors")

    return (
        <Wrapper>
            <div className="content">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="filter">
                        <input 
                            type="text" 
                            name="text"
                            value={text}
                            onChange={updateFilters}
                            placeholder="Search"
                            className="search-input"
                        />
                    </div>
                    <div className="filter">
                        <h5>Category</h5>
                        <div>
                            {
                                categories.map((item, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={updateFilters}
                                            name="category"
                                            className={category === item.toLowerCase() ? "category-button active" : "category-button"}
                                        >
                                            {item}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="filter">
                        <h5>Company</h5>
                        <select 
                            name="company"
                            value={company}
                            onChange={updateFilters}
                            className="company-filter"
                        >
                            {
                                companies.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="filter">
                        <h5>Colors</h5>
                        <div className="colors-filter">
                            {
                                colors.map((item, index) => {
                                    if(item === "all") {
                                        return (
                                            <button 
                                                key={index}
                                                onClick={updateFilters}
                                                name="color"
                                                className={color === "all" ? "all-button active" : "all-button"}
                                                data-color="all"
                                            >
                                                All
                                            </button>
                                        )
                                    }
                                    return (
                                        <button 
                                            key={index}
                                            onClick={updateFilters}
                                            name="color"
                                            className={color === item ? "color-button active" : "color-button"}
                                            data-color={item}
                                            style={ {background: item} }
                                        >
                                            {color === item ? <FaCheck /> : null}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="filter">
                        <h5>Price</h5>
                        <p>{formatPrice(price)}</p>
                        <input 
                            type="range" 
                            name="price" 
                            value={price}
                            min={minPrice}
                            max={maxPrice}
                            onChange={updateFilters}
                            className="price"
                        />
                    </div>
                    <div className="filter shipping">
                        <label htmlFor="shipping">Free Shipping</label>
                        <input 
                            type="checkbox"
                            name="shipping"
                            id="shipping"
                            checked={shipping}
                            onChange={updateFilters}
                        />
                    </div>
                </form>
                <button className="clear-button" onClick={clearFilters}>Clear Filters</button>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.article `

    border-radius: 0.5rem;

    .content {
        position: sticky;
        top: 1rem;
        border-radius: 0.5rem;
    }

    .search-input {
        border: none;
        border-radius: var(--border-radius);
        background: var(--gray-100);
        padding: 0.6rem 0.75rem;
        color: var(--gray-500);
        font-size: 0.9rem;
        letter-spacing: 1px;
        width: 100%;
        max-width: 200px;
        &::placeholder {
            color: var(--gray-500);
        }
    }

    input {
        outline: none;
    }
    
    .filter {
        margin-bottom: 1.5rem;
        p {
            margin: 0;
            margin-bottom: 0.25rem;
        }
    }
    
    .category-button, .all-button {
        display: block;
        margin-bottom: 0.75rem;
        color: var(--gray-500);
        font-size: 0.85rem;
        letter-spacing: 1px;
        background: transparent;
        border: none;
        text-transform: capitalize;
    }

    .category-button.active, .all-button.active {
        border-bottom: 1px solid var(--gray-500);
    }

    .company-filter {
        border: none;
        border-radius: var(--border-radius);
        outline: none;
        background: var(--gray-100);
        padding: 0.6rem 0.75rem;
        color: var(--gray-500);
        font-size: 0.9rem;
        letter-spacing: 1px;
        width: 100%;
        max-width: 200px;
        text-transform: capitalize;
    }

    .colors-filter {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .all-button {
        display: inline-block;
        margin: 0;
        margin-right: 0.5rem;
    }

    .color-button {
        display: inline-block;
        height: 1rem;
        width: 1rem;
        border: none;
        border-radius: 50%;
        color: white;
        display: grid;
        place-items: center;
        opacity: 0.5;
        font-size: 0.5rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .color-button.active {
        opacity: 1;
    }

    .shipping {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    label {
        font-size: 1rem;
        margin-right: 0.5rem;
    }

    .clear-button {
        background: var(--dark-red);
        border: none;
        border-radius: var(--border-radius);
        color: white;
        padding: 0.25rem 0.5rem;
        letter-spacing: var(--letter-spacing);
    }

    option {
        text-transform: capitalize;
    }

    @media all and (max-width: 600px) {
        width: 100%;
        margin: 0 auto;
        background: var(--gray-200);
        .content {
            padding: 2rem;
            width: 100%;
        }
        .search-input,
        .company-filter {
            background: var(--white);
        }
    }

`


export default Filters
