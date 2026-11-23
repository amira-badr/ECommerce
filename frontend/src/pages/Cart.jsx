import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const {
    cartItems = {},
    all_products = [],
    addToCart,
    removeFromCart,
  } = useContext(ShopContext)

  const navigate = useNavigate()

  // المنتجات داخل السلة
  const cartProducts = Object.keys(cartItems)
    .map((id) => {
      const product =
        all_products.find(
          (p) => p._id === id
        )

      return product
        ? {
            ...product,
            quantity:
              cartItems[id],
          }
        : null
    })
    .filter(Boolean)

  // السعر الكلي
  const totalPrice =
    cartProducts.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    )

  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-cyan-950
        text-white
        pt-32
        pb-24
        px-6
        sm:px-10
        flex
        flex-col
        items-center
      "
    >
      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/40
          backdrop-blur-sm
          pointer-events-none
        "
      ></div>

      <div
        className="
          relative z-10
          max-w-5xl
          mx-auto
          w-full
          flex
          flex-col
          mt-12
        "
      >
        {/* Title */}
        <h2
          className="
            text-4xl
            sm:text-5xl
            font-extrabold
            mb-14
            text-center
          "
        >
          سلة التسوق الخاصة بك
        </h2>

        {/* Empty */}
        {cartProducts.length === 0 ? (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              py-20
            "
          >
            <p
              className="
                text-slate-300
                text-2xl
                mb-8
              "
            >
              السلة فارغة الآن 🛒
            </p>

            <button
              onClick={() =>
                navigate("/")
              }
              className="
                px-8 py-4
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                via-sky-500
                to-blue-600
                text-white
                font-bold
                shadow-xl
                shadow-cyan-500/20
                hover:scale-105
                hover:shadow-cyan-500/40
                transition-all duration-300
                cursor-pointer
              "
            >
              ابدأ التسوق الآن
            </button>
          </div>
        ) : (
          <>
            {/* Products */}
            <div
              className="
                space-y-6
                mb-12
                w-full
              "
            >
              {cartProducts.map(
                (item) => (
                  <div
                    key={item._id}
                    className="
                      flex flex-col
                      lg:flex-row
                      items-center
                      justify-between
                      gap-6
                      bg-white/[0.06]
                      border border-white/15
                      backdrop-blur-2xl
                      p-6
                      sm:p-8
                      rounded-[35px]
                      shadow-2xl
                      hover:border-cyan-500/40
                      hover:shadow-cyan-500/20
                      transition-all duration-500
                    "
                  >
                    {/* Left */}
                    <div
                      className="
                        flex flex-col
                        sm:flex-row
                        items-center
                        gap-6
                        w-full
                      "
                    >
                      {/* Image */}
                      <div
                        className="
                          w-28 h-28
                          shrink-0
                          rounded-3xl
                          bg-gradient-to-br
                          from-cyan-500/10
                          to-blue-500/5
                          border border-white/10
                          flex items-center justify-center
                          p-2
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            w-20 h-20
                            object-contain
                            hover:scale-105
                            transition-all duration-300
                          "
                        />
                      </div>

                      {/* Info */}
                      <div
                        className="
                          text-center
                          sm:text-left
                          w-full
                        "
                      >
                        <h3
                          className="
                            text-xl
                            sm:text-2xl
                            font-bold
                            mb-2
                          "
                        >
                          {item.name}
                        </h3>

                        <p
                          className="
                            text-slate-400
                            text-sm
                            max-w-md
                            mb-3
                            line-clamp-2
                          "
                        >
                          {item.description}
                        </p>

                        <p
                          className="
                            text-cyan-400
                            text-xl
                            sm:text-2xl
                            font-extrabold
                          "
                        >
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Controls */}
                    <div
                      className="
                        flex items-center
                        gap-4
                        shrink-0
                      "
                    >
                      {/* Minus */}
                      <button
                        onClick={() =>
                          removeFromCart(
                            item._id
                          )
                        }
                        className="
                          w-11 h-11
                          rounded-full
                          flex items-center justify-center
                          bg-white/5
                          border border-white/10
                          hover:bg-red-500/20
                          transition-all
                          cursor-pointer
                        "
                      >
                        <Minus
                          className="
                            w-5 h-5
                          "
                        />
                      </button>

                      {/* Qty */}
                      <span
                        className="
                          text-xl
                          font-bold
                          min-w-[35px]
                          text-center
                        "
                      >
                        {item.quantity}
                      </span>

                      {/* Plus */}
                      <button
                        onClick={() =>
                          addToCart(
                            item._id
                          )
                        }
                        className="
                          w-11 h-11
                          rounded-full
                          flex items-center justify-center
                          bg-white/5
                          border border-white/10
                          hover:bg-cyan-500/20
                          transition-all
                          cursor-pointer
                        "
                      >
                        <Plus
                          className="
                            w-5 h-5
                          "
                        />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          removeFromCart(
                            item._id,
                            true
                          )
                        }
                        className="
                          w-11 h-11
                          rounded-full
                          flex items-center justify-center
                          bg-red-500/10
                          border border-red-500/20
                          hover:bg-red-500/30
                          transition-all
                          cursor-pointer
                        "
                      >
                        <Trash2
                          className="
                            w-5 h-5
                            text-red-400
                          "
                        />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Total */}
            <div
              className="
                w-full
                bg-white/[0.06]
                border border-white/15
                backdrop-blur-2xl
                p-6
                sm:p-8
                rounded-[35px]
                shadow-2xl
                flex flex-col
                lg:flex-row
                justify-between
                items-center
                gap-6
                mb-10
              "
            >
              {/* Price */}
              <div
                className="
                  text-2xl
                  sm:text-3xl
                  font-extrabold
                "
              >
                المجموع الكلي:
                <span
                  className="
                    text-cyan-400
                    ml-3
                  "
                >
                  $
                  {totalPrice.toFixed(
                    2
                  )}
                </span>
              </div>

              {/* Button */}
              <button
                onClick={() =>
                  navigate("/order")
                }
                className="
                  flex items-center
                  justify-center
                  gap-3
                  px-10 py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-blue-600
                  text-white
                  font-bold
                  text-lg
                  shadow-xl
                  shadow-cyan-500/20
                  hover:scale-105
                  hover:shadow-cyan-500/40
                  transition-all duration-300
                  w-full
                  sm:w-auto
                  cursor-pointer
                "
              >
                <ShoppingBag
                  className="
                    w-6 h-6
                  "
                />
                متابعة الشراء
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart