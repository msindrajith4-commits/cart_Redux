import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



function App() {
<>
<h1>Redux-cart</h1>
</>

  return (
    <>
    <header/>
    <Routes>
      <Route path='/'element={<products/>}/>
      <Route path='/products/:id' element={<products/>}/>
      <Route path='/wishlist'element={<wishlist/>}/>
      <Route path='/cart'element={<cart/>}/>
      <Route path='/*' element={<pageNotFound/>}/>
    </Routes>
    <footer/>
    </>
   )
}

export default App
