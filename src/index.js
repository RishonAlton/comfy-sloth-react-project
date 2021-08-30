import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import './index.css'
import App from './App'
import { SidebarProvider } from './Context/SidebarContext'
import { ProductsProvider } from './Context/ProductsContext'
import { FilterProvider } from './Context/FilterContext'
import { CartProvider } from './Context/CartContext'
import { UserProvider } from './Context/UserContext'


ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <SidebarProvider>
              <App />
            </SidebarProvider>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
