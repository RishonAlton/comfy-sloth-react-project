import React, { useContext, useEffect, useReducer } from "react"

import reducer from "../Reducers/filterReducer"
import {
    LOAD_PRODUCTS,
    SET_GRID_VIEW,
    SET_LIST_VIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS
} from "../Reducers/actions"
import { useProductsContext } from "./ProductsContext"


const FilterContext = React.createContext()

const initalState = {
    allProducts: [],
    filteredProducts: [],
    gridView: true,
    sort: "price-lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        shipping: false
    }
}


const FilterProvider = ({children}) => {

    const { products } = useProductsContext()
    const [state, dispatch] = useReducer(reducer, initalState)

    useEffect(() => {
        dispatch({type: LOAD_PRODUCTS, payload: products})
    }, [products])

    useEffect(() => {
        dispatch({type: FILTER_PRODUCTS})
        dispatch({type: SORT_PRODUCTS})
    }, [products, state.sort, state.filters])

    const setGridView = () => {
        dispatch({type: SET_GRID_VIEW})
    }

    const setListView = () => {
        dispatch({type: SET_LIST_VIEW})
    }

    const updateSort = (e) => {
        const value = e.target.value
        dispatch({type: UPDATE_SORT, payload: value})
    }

    const updateFilters = (e) => {
        let name = e.target.name
        let value = e.target.value
        if(name === "category") {
            value = e.target.textContent
        }
        if(name === "color") {
            value = e.target.dataset.color
        }
        if(name === "price") {
            value = Number(value)
        }
        if(name === "shipping") {
            value = e.target.checked
        }
        dispatch({ type: UPDATE_FILTERS, payload: {name, value} })
    }

    const clearFilters = () => {
        dispatch({type: CLEAR_FILTERS})
    }

    return (
        <FilterContext.Provider value={
            {
                ...state,
                setGridView,
                setListView,
                updateSort,
                updateFilters,
                clearFilters
            }
        }
        >
            {children}
        </FilterContext.Provider>
    )
    
}


const useFilterContext = () => {

    return useContext(FilterContext)

}


export {
    FilterProvider,
    useFilterContext
}