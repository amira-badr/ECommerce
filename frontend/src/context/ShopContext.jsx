import {
  createContext,
  useState,
  useEffect,
} from "react"

import { all_products } from "../assets/data"

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({})
  const [allProducts] = useState(all_products)
  const [token, setToken] = useState("")

  // تحميل السلة من LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems")

    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // حفظ السلة
  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    )
  }, [cartItems])

  // إضافة منتج
  const addToCart = (
    id,
    quantity = 1
  ) => {

    setCartItems((prev) => ({
      ...prev,

      [id]: prev[id]
        ? prev[id] + quantity
        : quantity,
    }))
  }

  // حذف منتج
  const removeFromCart = (
    id,
    removeAll = false
  ) => {

    setCartItems((prev) => {

      const updated = { ...prev }

      if (
        removeAll ||
        updated[id] === 1
      ) {

        delete updated[id]

      } else {

        updated[id]--

      }

      return updated
    })
  }

  // حساب إجمالي السعر
  const getTotalCartAmount = () => {

    return Object.entries(cartItems).reduce(

      (total, [id, qty]) => {

        const product = all_products.find(
          (p) => p._id === id
        )

        return total + (
          product
            ? product.price * qty
            : 0
        )
      },

      0
    )
  }

  // تحميل التوكن
  useEffect(() => {

    if (localStorage.getItem("token")) {

      setToken(
        localStorage.getItem("token")
      )

    }

  }, [])

  const value = {

    all_products: allProducts,

    cartItems,

    addToCart,

    removeFromCart,

    getTotalCartAmount,

    token,

    setToken,
  }

  return (

    <ShopContext.Provider value={value}>

      {children}

    </ShopContext.Provider>

  )
}

export default ShopContextProvider