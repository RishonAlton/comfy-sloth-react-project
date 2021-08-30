import { 
    LOAD_PRODUCTS,
    SET_GRID_VIEW,
    SET_LIST_VIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS
} from "./actions"


const filterReducer = (state, action) => {

    if(action.type === LOAD_PRODUCTS) {
        let maxPrice = action.payload.map(product => product.price)
        maxPrice = Math.max(...maxPrice)
        return {
            ...state,
            allProducts: [...action.payload],
            filteredProducts: [...action.payload],
            filters: {...state.filters, maxPrice, price: maxPrice}
        }
    }

    if(action.type === SET_GRID_VIEW) {
        return {...state, gridView: true}
    }

    if(action.type === SET_LIST_VIEW) {
        return {...state, gridView: false}
    }

    if(action.type === UPDATE_SORT) {
        return {...state, sort: action.payload}
    }

    if(action.type === SORT_PRODUCTS) {
        const { sort, filteredProducts: products } = state
        let sortedProducts = [...products]
        if(sort === "price-lowest") {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price)
        }
        if(sort === "price-highest") {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price)
        }
        if(sort === "name-a") {
            sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
        }
        if(sort === "name-z") {
            sortedProducts = sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
        }
        return {...state, filteredProducts: sortedProducts}
    }

    if(action.type === UPDATE_FILTERS) {
        const { name, value } = action.payload
        return { ...state, filters: {...state.filters, [name]: value} }
    }

    if(action.type === FILTER_PRODUCTS) {
        const { allProducts } = state
        const { text, category, company, color, price, shipping } = state.filters
        let products = [...allProducts]
        if(text) {
            products = products.filter(product => product.name.toLowerCase().startsWith(text.toLowerCase()))
        }
        if(category !== "all") {
            products = products.filter(product => product.category === category)
        }
        if(company !== "all") {
            products = products.filter(product => product.company === company)
        }
        if(color !== "all") {
            products = products.filter(product => {
                return product.colors.find(item => item === color)
            })
        }
        products = products.filter(product => product.price <= price)
        if(shipping) {
            products = products.filter(product => product.shipping === true)
        }
        return { ...state, filteredProducts: products }
    }

    if(action.type === CLEAR_FILTERS) {
        return { ...state, filters: {...state.filters, text: "", category: "all", company: "all", color: "all", price: state.filters.maxPrice, shipping: false} }
    }

    throw new Error(`No matching "${action.type}" action type`)

}


export default filterReducer