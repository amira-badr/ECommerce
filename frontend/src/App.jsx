import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"

import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Verify from "./pages/Verify"
import MyOrders from "./pages/MyOrders"

import Login from "./components/Login"
import SignUp from "./components/SignUp"

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App