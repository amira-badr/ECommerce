import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { useNavigate } from "react-router-dom"

const Order = () => {
  const {
    cartItems = {},
    all_products = [],
  } = useContext(ShopContext)

  const navigate = useNavigate()

  // المنتجات الموجودة في السلة
  const cartProducts = Object.keys(cartItems)
    .map((id) => {
      const product = all_products.find(
        (p) => p._id === id
      )

      return product
        ? {
            ...product,
            quantity: cartItems[id],
          }
        : null
    })
    .filter(Boolean)

  // حساب السعر الكلي
  const totalPrice = cartProducts.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  })

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    })
  }

  const handleConfirmOrder = () => {
    if (
      !shipping.name ||
      !shipping.address ||
      !shipping.city ||
      !shipping.phone
    ) {
      alert("من فضلك املأ جميع البيانات")
      return
    }

    alert("تم إرسال الطلب بنجاح ✅")

    navigate("/")
  }

  return (
    <section
      className="
        relative w-full min-h-screen
        bg-gradient-to-r
        from-indigo-900
        via-purple-900
        to-pink-900
        text-white
        pt-44
        pb-24
        px-6 sm:px-10
        flex
        flex-col
        items-center
      "
    >
      <div
        className="
          absolute inset-0
          bg-black/30
          backdrop-blur-sm
          pointer-events-none
        "
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <h2
          className="
            text-4xl sm:text-5xl
            font-extrabold
            mb-12 text-center
          "
        >
          إتمام الطلب
        </h2>

        {cartProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <p className="text-2xl text-gray-300 mb-6">
              السلة فارغة
            </p>

            <button
              onClick={() => navigate("/")}
              className="
                px-8 py-3.5
                rounded-2xl
                bg-cyan-500
                hover:bg-cyan-600
                transition-all
                cursor-pointer
                font-bold
              "
            >
              العودة للتسوق
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* المنتجات */}
            <div className="space-y-6 w-full">
              {cartProducts.map((item) => (
                <div
                  key={item._id}
                  className="
                    flex items-center gap-4
                    bg-white/10
                    p-4 rounded-2xl
                    border border-white/20
                    backdrop-blur-xl
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-20 h-20
                      object-contain
                      rounded-xl
                    "
                  />

                  <div>
                    <h3 className="text-lg font-bold">
                      {item.name}
                    </h3>

                    <p className="text-gray-300">
                      الكمية: {item.quantity}
                    </p>

                    <p className="text-cyan-400 font-bold">
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-2xl font-bold pt-4 text-center sm:text-right">
                الإجمالي:

                <span className="text-cyan-400 ml-2">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* بيانات الشحن (متسنتر في النص) */}
            <div
              className="
                bg-white/10
                p-8 rounded-3xl
                border border-white/20
                backdrop-blur-xl
                max-w-md
                w-full
                mx-auto
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  mb-6 text-center
                "
              >
                بيانات الشحن
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={shipping.name}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-white/20
                    px-4 py-3
                    rounded-xl
                    outline-none
                    placeholder-gray-300
                    text-white
                    border border-white/10
                    focus:border-cyan-400
                    transition-all
                  "
                />

                <input
                  type="text"
                  name="address"
                  placeholder="العنوان"
                  value={shipping.address}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-white/20
                    px-4 py-3
                    rounded-xl
                    outline-none
                    placeholder-gray-300
                    text-white
                    border border-white/10
                    focus:border-cyan-400
                    transition-all
                  "
                />

                <input
                  type="text"
                  name="city"
                  placeholder="المدينة"
                  value={shipping.city}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-white/20
                    px-4 py-3
                    rounded-xl
                    outline-none
                    placeholder-gray-300
                    text-white
                    border border-white/10
                    focus:border-cyan-400
                    transition-all
                  "
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={shipping.phone}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-white/20
                    px-4 py-3
                    rounded-xl
                    outline-none
                    placeholder-gray-300
                    text-white
                    border border-white/10
                    focus:border-cyan-400
                    transition-all
                  "
                />

                <button
                  onClick={handleConfirmOrder}
                  className="
                    w-full
                    py-3.5
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-500
                    via-purple-500
                    to-pink-500
                    font-bold
                    hover:opacity-90
                    transition-all
                    cursor-pointer
                    shadow-lg
                  "
                >
                  تأكيد الطلب 🚀
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Order