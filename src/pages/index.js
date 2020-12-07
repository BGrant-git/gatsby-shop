import React, { useState, useEffect } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import TrackVisibility from 'react-on-screen'
import { graphql } from 'gatsby'
import './app.css'

import MenuAppBar from '../components/MenuAppBar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

import Home from '../pages/Home'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
import Results from '../pages/Results'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

export const query = graphql`
  {
    allShopifyCollection {
      nodes {
        title
        products {
          title
          tags
          images {
            originalSrc
          }
          description
          variants {
            price
          }
        }
      }
    }
  }  
`

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
})

const App = ({data}) => {

  const productsQuery = Object.entries(data)
  const productsMens = productsQuery[0][1].nodes[0].products.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  })
  const productsWomens = productsQuery[0][1].nodes[1].products.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  })
  const productsAll = productsMens.concat(productsWomens)
  const productsSuits = productsQuery[0][1].nodes[2].products

  const[input, setInput] = useState('')
  const[search, setSearch] = useState('')
  const[cartPrice, setCartPrice] = useState('')

  var useStickyState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }
  const[cartItems, setCartItems] = useStickyState('','cart')
  const[results, setResults] = useStickyState('','results')
  const[viewProduct, setViewProduct] = useStickyState('','product')

  let numOfItems = cartItems.length  
  
  const handleSearchChange = event => {
    setInput(event.target.value)    
  }

  const getAppBarSearch = () => {
    setSearch(input)
  }

  useEffect(() => {
    const result = productsAll.filter(ele => ele.title.toLowerCase().indexOf(search.toLowerCase()) > 0)
    setResults(result)
  }, [search]) 

  const addToCart = event => {
    setCartItems([...cartItems, event])
    ToastsStore.error("Item added")
  }

  const removeFromCart = event => {
    let hardCopy = [...cartItems]
    hardCopy = hardCopy.filter(ele => ele.title !== event.title)
    setCartItems(hardCopy)
    if (cartItems.length === 1) {
      setCartPrice(0)
    }
    ToastsStore.error("Item removed")
  }

  const clearCart = () => {
    setCartItems('')
    setCartPrice(0)
    ToastsStore.error("Cart cleared")
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartPrice(cartItems
        .map(item => item.variants[0].price)
        .map(item => parseFloat(item))       
        .reduce((acc, curr) => acc + curr)
      )      
    }
  }, [cartItems]);

  const getViewProduct = event => {
    setViewProduct(event)
  }
  
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
	
  
  return (
    <ThemeProvider theme={theme}>
    <Grid 
      container 
      direction="column" 
      style={{maxWidth:1300,margin:'auto'}}
      >
      <HashRouter>
        <Grid item>
          <MenuAppBar 
            handleSearchChange={handleSearchChange} 
            getAppBarSearch={getAppBarSearch} 
            numOfItems={numOfItems} 
            />  
        </Grid>  

        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />

        <Switch>          
          <Route exact path='/'>  
            <Grid item container>
              <Grid item xs={false} sm={1} />
                <Grid item xs={12} md={10}>       
                  <Home productsSuits={productsSuits} getViewProduct={getViewProduct} />
                </Grid>   
              <Grid item xs={false} sm={1} />  
            </Grid>
          </Route>

          <Route path='/mens' >
            <Grid item container>
              <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={10}>
                  <Mens 
                    productsMens={productsMens}
                    addToCart={addToCart}
                    getViewProduct={getViewProduct}
                    />
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
          </Route>

          <Route path='/womens'>
            <Grid item container>
              <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={10}>
                  <Womens 
                    productsWomens={productsWomens}
                    addToCart={addToCart}
                    getViewProduct={getViewProduct}
                    />
                </Grid>
              <Grid item xs={false} sm={1} />
            </Grid>
          </Route>  

          <Route path='/results'>
            <Grid item container>
              <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                  <Results results={results} addToCart={addToCart} />
                </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Route>  

          <Route path='/cart'>
            <Grid item container>
              <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                  <Cart 
                    cart={cartItems} 
                    cartPrice={cartPrice}
                    clearCart={clearCart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    />
                </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Route>  

          <Route path='/product'>
            <Grid item container>
              <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                  <Product viewProduct={viewProduct} addToCart={addToCart} />
                </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Route>  
        </Switch>

        <TrackVisibility>
          <ScrollToTop scrollToTop={scrollToTop}/>
        </TrackVisibility>

        <Grid item>
          <Footer />
        </Grid>
      </HashRouter>
    </Grid>
    </ThemeProvider>
  )
}

export default App

