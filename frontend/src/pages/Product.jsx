import { useParams } from "react-router-dom"
import { useState, useContext } from "react"

import { ShopContext } from "../context/ShopContext"

const Product = () => {

  const { addToCart, all_products } =
    useContext(ShopContext)

  const { productId } = useParams()

  const product = all_products.find(
    (p) => p._id === productId
  )

  const [selectedColor, setSelectedColor] =
    useState("Red")

  const [selectedSize, setSelectedSize] =
    useState("M")

  const [quantity, setQuantity] =
    useState(1)

  // المنتج غير موجود
  if (!product) {

    return (
      <section
        className="
          min-h-screen
          flex items-center justify-center

          bg-gradient-to-br
          from-slate-950
          via-slate-900
          to-cyan-950

          text-white
        "
      >

        <p className="text-3xl font-bold">
          المنتج غير موجود 😢
        </p>

      </section>
    )

  }

  // إضافة للسلة
  const handleAddToCart = () => {

    addToCart(product._id, quantity)

    alert(
      `✅ تمت إضافة ${quantity} قطعة من ${product.name} إلى السلة`
    )

  }

  return (

    <section
      className="
        relative
        w-full min-h-screen

        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-cyan-950

        text-white

        py-28 px-6 sm:px-10
      "
    >

      <div
        className="
          max-w-7xl mx-auto

          bg-white/5
          border border-white/10

          backdrop-blur-2xl

          rounded-[40px]

          p-8 md:p-12

          flex flex-col md:flex-row

          gap-12

          shadow-2xl
        "
      >

        {/* صورة المنتج */}
        <div
          className="
            md:w-1/2

            flex items-center justify-center

            bg-white/5
            border border-white/10

            rounded-[35px]

            p-10
          "
        >

          <img
            src={product.image}
            alt={product.name}
            className="
              w-72 h-72

              object-contain

              hover:scale-105
              transition-all duration-500
            "
          />

        </div>

        {/* تفاصيل المنتج */}
        <div
          className="
            flex-1
            flex flex-col
            gap-7
          "
        >

          <h2
            className="
              text-4xl md:text-5xl
              font-extrabold
              leading-tight
            "
          >
            {product.name}
          </h2>

          <p
            className="
              text-slate-300
              text-lg
              leading-8
            "
          >
            {product.description}
          </p>

          <p
            className="
              text-cyan-400
              text-4xl
              font-extrabold
            "
          >
            ${product.price}
          </p>

          <p
            className="
              text-slate-300
              text-lg
            "
          >
            Category:
            <span className="text-cyan-400 ml-2">
              {product.category}
            </span>
          </p>

          {/* الألوان */}
          <div>

            <h4
              className="
                font-semibold
                mb-4
                text-lg
              "
            >
              Color
            </h4>

            <div className="flex gap-4">

              {[
                "Red",
                "Blue",
                "Green",
                "Black",
                "White",
              ].map((color) => (

                <button
                  key={color}
                  onClick={() =>
                    setSelectedColor(color)
                  }
                  className={`
                    w-10 h-10
                    rounded-full

                    border-2

                    transition-all duration-300

                    ${
                      selectedColor === color
                        ? `
                          scale-125
                          border-cyan-400
                          shadow-lg shadow-cyan-500/40
                        `
                        : `
                          border-white/30
                        `
                    }
                  `}
                  style={{
                    backgroundColor:
                      color.toLowerCase(),
                  }}
                />

              ))}

            </div>

          </div>

          {/* المقاسات */}
          <div>

            <h4
              className="
                font-semibold
                mb-4
                text-lg
              "
            >
              Size
            </h4>

            <div className="flex gap-4">

              {["S", "M", "L", "XL"].map(
                (size) => (

                  <button
                    key={size}
                    onClick={() =>
                      setSelectedSize(size)
                    }
                    className={`
                      px-5 py-3

                      rounded-2xl

                      border

                      transition-all duration-300

                      ${
                        selectedSize === size
                          ? `
                            bg-cyan-400
                            text-black
                            border-cyan-400
                            scale-105
                            shadow-lg shadow-cyan-500/30
                          `
                          : `
                            bg-white/5
                            border-white/10
                            text-white
                          `
                      }
                    `}
                  >
                    {size}
                  </button>

                )
              )}

            </div>

          </div>

          {/* الكمية */}
          <div
            className="
              flex items-center
              gap-5
            "
          >

            <h4
              className="
                font-semibold
                text-lg
              "
            >
              Quantity
            </h4>

            <div
              className="
                flex items-center
                gap-4

                bg-white/5
                border border-white/10

                px-4 py-2

                rounded-2xl
              "
            >

              <button
                onClick={() =>
                  setQuantity(
                    Math.max(
                      1,
                      quantity - 1
                    )
                  )
                }
                className="
                  text-xl

                  hover:text-cyan-400
                  transition-all
                "
              >
                -
              </button>

              <span
                className="
                  text-lg
                  font-bold
                "
              >
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="
                  text-xl

                  hover:text-cyan-400
                  transition-all
                "
              >
                +
              </button>

            </div>

          </div>

          {/* زر السلة */}
          <button
            onClick={handleAddToCart}
            className="
              mt-4

              w-full md:w-fit

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
            "
          >
            Add To Cart
          </button>

        </div>

      </div>

    </section>

  )

}

export default Product