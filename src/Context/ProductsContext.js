import React, { useContext, useEffect, useReducer } from "react"
import axios from "axios"

import reducer from "../Reducers/productsReducer"
import {
    DISPLAY_PRODUCTS_LOADING,
    DISPLAY_PRODUCTS_ERROR,
    DISPLAY_ALL_PRODUCTS,
    DISPLAY_PRODUCT_INFO_LOADING,
    DISPLAY_PRODUCT_INFO_ERROR,
    DISPLAY_PRODUCT_INFO
} from "../Reducers/actions"
import { productsURL as url } from "../Utils/constants"


const ProductsContext = React.createContext()

const initalState = {
    productsLoading: false,
    productsError: false,
    products: [],
    featured: [],
    productInfoLoading: false,
    productInfoError: false,
    productInfo: {}
}


const ProductsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initalState)

    const fetchProducts = async (url) => {
        dispatch({type: DISPLAY_PRODUCTS_LOADING})
        try {
            const response = await axios(url)
            const products = response.data
            dispatch({type: DISPLAY_ALL_PRODUCTS, payload: products})
        } 
        catch (error) {
            dispatch({type: DISPLAY_PRODUCTS_ERROR})
        }
    }

    const fetchProductInfo = async (url) => {
        dispatch({type: DISPLAY_PRODUCT_INFO_LOADING})
        try {
            const response = await axios(url)
            const productInfo = response.data
            dispatch({type: DISPLAY_PRODUCT_INFO, payload: productInfo})
        } 
        catch (error) {
            dispatch({type: DISPLAY_PRODUCT_INFO_ERROR})
        }
    }

    useEffect(() => {
        fetchProducts(url)
    }, [])

    return (
        <ProductsContext.Provider value={
            {
                ...state,
                fetchProductInfo
            }
        }
        >
            {children}
        </ProductsContext.Provider>
    )
    
}


const useProductsContext = () => {

    return useContext(ProductsContext)

}


export {
    ProductsProvider,
    useProductsContext
}