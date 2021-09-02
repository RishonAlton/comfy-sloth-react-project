import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill, BsList } from 'react-icons/bs'

import { useFilterContext } from '../Context/FilterContext'


const Sort = () => {

    const { gridView, setGridView, setListView, filteredProducts: products, sort , updateSort } = useFilterContext()

    return (
        <Wrapper>
            <div className="buttons-container">
                <button
                    className={gridView ? "active" : null}
                    onClick={setGridView}
                >
                    <BsFillGridFill />
                </button>
                <button
                    className={!gridView ? "active" : null}
                    onClick={setListView}
                >
                    <BsList />
                </button>
            </div>
            <p>
                {products.length} Products Found
            </p>
            <hr />
            <div className="sort">
                <p>Sort By</p>
                <select 
                    name="sort" 
                    id="sort"
                    value={sort}
                    onChange={updateSort}
                >
                    <option value="price-lowest">Price (Lowest)</option>
                    <option value="price-highest">Price (Highest)</option>
                    <option value="name-a">Name (A - Z)</option>
                    <option value="name-z">Name (Z - A)</option>
                </select>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.div ` 

    display: grid;
    grid-template-columns: auto auto 1fr auto;
    grid-gap: 1rem 2rem;
    margin-bottom: 2rem;
    align-items: center;

    .buttons-container {
        display: flex;
    }

    button {
        display: inline-block;
        height: 1.5rem;
        width: 1.5rem;
        font-size: 1rem;
        display: grid;
        place-items: center;
        background: transparent;
        border: 1px solid var(--black);
        border-radius: var(--border-radius);
        margin-right: 0.5rem;
    }

    .active {
        color: white;
        background: var(--black);
    }

    p {
        margin: 0;
    }

    .sort {
        display: flex;
    }

    select {
        border: none;
        outline: none;
        color: var(--gray-800);
        font-size: 1rem;
        margin-left: 0.5rem;
    }

    @media all and (max-width: 900px) {
        grid-template-columns: auto;
    }

`


export default Sort
