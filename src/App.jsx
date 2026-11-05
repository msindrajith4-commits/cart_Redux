
import './App.css'
import Products from './Pages/Products'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'




function App() {
<>
<h1>Redux-cart</h1>
</>

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={<Products/>}/>
      <Route path='/products/:id' element={<products/>}/>
      <Route path='/wishlist'element={<Wishlist/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
   )
}

export default App
