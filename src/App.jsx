import React, {useState} from 'react'
import './App.css'

// Importing Components
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {

  const [cartIsShown, setCardIsShown] = useState(false)

  function showCartHandler() {

    setCardIsShown(true)
  }

  function hideCartHandler() {

    setCardIsShown(false)
  }

  return (
    <CartProvider>
     {cartIsShown ? <Cart onClose={hideCartHandler} /> : null}
     <Header onShowCart={showCartHandler} />
     <main>
      <Meals />
     </main>
    </CartProvider>
  )
}

export default App
