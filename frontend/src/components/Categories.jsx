import {
  useState,
  useContext,
} from "react"

import {
  categories,
  all_products,
} from "../assets/data"

import {
  ShoppingBag,
} from "lucide-react"

import { ShopContext } from "../context/ShopContext"

const Categories = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All")

  const { addToCart } =
    useContext(ShopContext)

  const filteredProducts =
    selectedCategory === "All"
      ? all_products
      : all_products.filter(
          (p) =>
            p.category ===
            selectedCategory
        )

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
      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/40
          backdrop-blur-sm
        "
      ></div>

      <div
        className="
          relative z-10
          max-w-[1400px] mx-auto
          text-center
        "
      >
        {/* Title */}
        <h2
          className="
            text-4xl sm:text-5xl
            font-extrabold
            mb-14
          "
        >
          تسوق حسب الفئة
        </h2>

        {/* Buttons */}
        <div
          className="
            flex flex-wrap
            justify-center
            gap-5
            mb-16
          "
        >
          {/* All */}
          <button
            onClick={() =>
              setSelectedCategory("All")
            }
            className={`
              px-7 py-3
              rounded-2xl
              font-bold
              text-lg
              transition-all duration-300
              ${
                selectedCategory === "All"
                  ? `
                    bg-gradient-to-r
                    from-cyan-500
                    via-sky-500
                    to-blue-600
                    text-white
                    scale-105
                    shadow-xl
                    shadow-cyan-500/30
                  `
                  : `
                    bg-white/5
                    border border-white/10
                    hover:bg-white/10
                    text-slate-300
                  `
              }
            `}
          >
            الكل
          </button>

          {/* Categories */}
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() =>
                setSelectedCategory(
                  cat.name
                )
              }
              className={`
                px-7 py-3
                rounded-2xl
                font-bold
                text-lg
                transition-all duration-300
                ${
                  selectedCategory ===
                  cat.name
                    ? `
                      bg-gradient-to-r
                      from-cyan-500
                      via-sky-500
                      to-blue-600
                      text-white
                      scale-105
                      shadow-xl
                      shadow-cyan-500/30
                    `
                    : `
                      bg-white/5
                      border border-white/10
                      hover:bg-white/10
                      text-slate-300
                    `
                }
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            justify-items-center
            gap-8
            sm:gap-10
          "
        >
          {filteredProducts.map(
            (product) => (
              <div
                key={product._id}
                className="
                  w-full
                  h-full
                  flex flex-col
                  bg-white/[0.06]
                  border border-cyan-400/20
                  backdrop-blur-2xl
                  rounded-[32px]
                  overflow-hidden
                  shadow-2xl
                  hover:-translate-y-2
                  hover:border-cyan-400/50
                  hover:shadow-cyan-500/25
                  transition-all duration-500
                  group
                "
              >
                {/* Image Centered */}
                <div
                  className="
                    relative
                    w-full h-64
                    flex items-center justify-center
                    p-6
                    bg-gradient-to-b
                    from-cyan-500/15
                    via-sky-500/5
                    to-transparent
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      object-contain
                      w-48 h-48
                      mx-auto
                      drop-shadow-xl
                      group-hover:scale-110
                      transition-all duration-500
                    "
                  />
                </div>

                {/* Content Centered */}
                <div
                  className="
                    p-6
                    pt-4
                    flex-1
                    flex flex-col
                    items-center
                    text-center
                    justify-between
                  "
                >
                  <div className="w-full">
                    <h3
                      className="
                        text-xl
                        font-extrabold
                        text-white
                        mb-2
                        truncate
                      "
                    >
                      {product.name}
                    </h3>

                    <p
                      className="
                        text-slate-400
                        text-sm
                        mb-4
                        line-clamp-2
                        leading-relaxed
                      "
                    >
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Centered Add Button */}
                  <div
                    className="
                      w-full
                      flex flex-col
                      items-center
                      gap-4
                      pt-3
                      border-t border-white/10
                    "
                  >
                    {/* Price */}
                    <span
                      className="
                        text-2xl
                        font-black
                        text-cyan-400
                        tracking-wide
                      "
                    >
                      $
                      {product.price.toFixed(
                        2
                      )}
                    </span>

                    {/* Centered Add Button */}
                    <button
                      onClick={() =>
                        addToCart(
                          product._id
                        )
                      }
                      className="
                        w-full
                        flex items-center
                        justify-center
                        gap-2.5
                        px-6 py-3.5
                        rounded-2xl
                        bg-gradient-to-r
                        from-cyan-500
                        via-sky-500
                        to-blue-600
                        text-white
                        font-bold
                        text-base
                        shadow-lg
                        shadow-cyan-500/25
                        hover:scale-[1.03]
                        hover:shadow-cyan-500/50
                        active:scale-95
                        transition-all duration-300
                        cursor-pointer
                      "
                    >
                      <ShoppingBag
                        className="
                          w-5 h-5
                        "
                      />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Categories