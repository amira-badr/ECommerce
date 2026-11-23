import React, {
  useContext,
  useEffect,
  useState,
} from "react"

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom"

import { ShopContext } from "../context/ShopContext"

import {
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react"

const Verify = () => {

  const [searchParams] = useSearchParams()

  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")

  const storedToken =
    localStorage.getItem("token")

  const {
    clearCart,
    removeFromCart,
    setCartItems,
    token,
    getTotalCartAmount,
  } = useContext(ShopContext)

  const navigate = useNavigate()

  const [status, setStatus] =
    useState("loading")

  useEffect(() => {

    const verifyPayment = async () => {

      try {

        // محاكاة API
        await new Promise((resolve) =>
          setTimeout(resolve, 2500)
        )

        if (
          success === "true" &&
          storedToken
        ) {

          setStatus("success")

          setCartItems({})

          localStorage.removeItem(
            "cartItems"
          )

          setTimeout(() => {
            navigate("/myorders")
          }, 3000)

        } else {

          setStatus("error")

          setTimeout(() => {
            navigate("/")
          }, 3000)

        }

      } catch (error) {

        setStatus("error")

      }
    }

    verifyPayment()

  }, [])

  return (

    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-r
        from-indigo-900
        via-purple-900
        to-pink-900
        text-white
        px-6
      "
    >

      <div
        className="
          text-center
          flex
          flex-col
          items-center
        "
      >

        {/* Loading */}
        {status === "loading" && (

          <div
            className="
              flex
              flex-col
              items-center
              animate-pulse
            "
          >

            <Loader2
              className="
                w-20
                h-20
                animate-spin
                text-cyan-400
                mb-6
              "
            />

            <h2
              className="
                text-2xl
                font-semibold
              "
            >
              جاري التحقق من عملية الدفع...
            </h2>

            <p
              className="
                text-gray-300
                mt-2
              "
            >
              يرجى الانتظار قليلاً ⏳
            </p>

          </div>
        )}

        {/* Success */}
        {status === "success" && (

          <div
            className="
              flex
              flex-col
              items-center
              animate-pulse
            "
          >

            <CheckCircle
              className="
                w-20
                h-20
                text-green-400
                mb-6
              "
            />

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              🎉 تم الدفع بنجاح
            </h2>

            <p
              className="
                text-gray-300
                mt-2
              "
            >
              سيتم نقلك إلى طلباتك الآن...
            </p>

          </div>
        )}

        {/* Error */}
        {status === "error" && (

          <div
            className="
              flex
              flex-col
              items-center
              animate-pulse
            "
          >

            <XCircle
              className="
                w-20
                h-20
                text-red-400
                mb-6
              "
            />

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              😢 فشلت عملية الدفع
            </h2>

            <p
              className="
                text-gray-300
                mt-2
              "
            >
              سيتم إعادتك للصفحة الرئيسية...
            </p>

          </div>
        )}

      </div>

    </section>
  )
}

export default Verify