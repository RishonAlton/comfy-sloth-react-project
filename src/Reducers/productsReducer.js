import { 
    DISPLAY_PRODUCTS_LOADING, 
    DISPLAY_PRODUCTS_ERROR, 
    DISPLAY_ALL_PRODUCTS,
    DISPLAY_PRODUCT_INFO_LOADING,
    DISPLAY_PRODUCT_INFO_ERROR,
    DISPLAY_PRODUCT_INFO
} from "./actions"


const productsReducer = (state, action) => {

    if(action.type === DISPLAY_PRODUCTS_LOADING) {
        return {...state, productsLoading: true}
    }

    if(action.type === DISPLAY_ALL_PRODUCTS) {
        const featured = action.payload.filter(product => product.featured === true)
        return {...state, productsLoading: false, products: action.payload, featured}
    }

    if(action.type === DISPLAY_PRODUCTS_ERROR) {
        return {...state, productsLoading: false, productsError: true}
    }

    if(action.type === DISPLAY_PRODUCT_INFO_LOADING) {
        return {...state, productInfoLoading: true, productInfoError: false}
    }

    if(action.type === DISPLAY_PRODUCT_INFO) {
        return {...state, productInfoLoading: false, productInfo: action.payload}
    }

    if(action.type === DISPLAY_PRODUCT_INFO_ERROR) {
        return {...state, productInfoLoading: false, productInfoError: true}
    }

    throw new Error(`No matching ${action.type} action type`)

}


export default productsReducer