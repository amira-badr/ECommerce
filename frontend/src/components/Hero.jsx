import {
  ShoppingCart,
  Sparkles,
  ArrowRight,
} from "lucide-react"

import heroImage from "../assets/bg.png"

const Hero = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-cyan-950
        text-white
        flex items-center justify-center
        py-12
      "
    >
      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/50
        "
      ></div>

      {/* Blur Circle */}
      <div
        className="
          absolute
          top-10
          left-10
          w-96 h-96
          bg-cyan-500/25
          rounded-full
          blur-[160px]
        "
      ></div>

      {/* Container */}
      <div
        className="
          relative z-10
          w-full
          max-w-[1300px]
          mx-auto
          px-6
          sm:px-8
          flex flex-col-reverse
          lg:flex-row
          items-center
          justify-center
          gap-10
        "
      >
        {/* Content */}
        <div
          className="
            w-full
            lg:w-[52%]
            text-center
            lg:text-left
            space-y-6
            flex flex-col
            justify-center
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2.5
              px-5 py-2.5
              rounded-full
              bg-cyan-500/15
              border-2 border-cyan-400/40
              text-cyan-300
              font-bold
              text-sm
              mx-auto
              lg:mx-0
              w-fit
              shadow-lg
            "
          >
            <Sparkles
              className="
                w-4 h-4
              "
            />
            أفضل العروض لهذا الأسبوع 🔥
          </div>

          {/* Title */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              leading-[1.2]
              tracking-tight
            "
          >
            اكتشف أحدث <br className="hidden sm:inline" />
            المنتجات والعروض
          </h1>

          {/* Description */}
          <p
            className="
              text-slate-300
              text-base
              sm:text-lg
              leading-relaxed
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            تسوق الآن واستمتع بأفضل الخصومات على الإلكترونيات، الأزياء والمنتجات المميزة مع تجربة شراء حديثة وسريعة.
          </p>

          {/* Buttons (أزرار أكبر حجماً وأكثر بروزاً) */}
          <div
            className="
              flex flex-col
              sm:flex-row
              items-center
              justify-center
              lg:justify-start
              gap-5
              pt-3
            "
          >
            {/* Shop Button */}
            <button
              onClick={() =>
                (window.location.href = "/shop")
              }
              className="
                flex items-center
                gap-3
                px-10 py-4
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                via-sky-500
                to-blue-600
                text-white
                font-extrabold
                text-lg
                shadow-2xl
                shadow-cyan-500/50
                hover:scale-105
                transition-all duration-300
                w-full sm:w-auto
                justify-center
              "
            >
              <ShoppingCart
                className="
                  w-10 h-12
                "
              />
              تسوق الآن
            </button>

            {/* Categories Button */}
            <button
              onClick={() =>
                (window.location.href = "/categories")
              }
              className="
                flex items-center
                gap-3
                px-10 py-4
                rounded-2xl
                bg-white/10
                border-2 border-white/30
                text-white
                font-extrabold
                text-lg
                hover:bg-white/20
                hover:scale-105
                transition-all duration-300
                w-full sm:w-auto
                justify-center
              "
            >
              تصفح الفئات
              <ArrowRight
                className="
                  w-10 h-10
                "
              />
            </button>
          </div>
        </div>

        {/* Image (صورة أعرض وبوردر أعرض وأتخن) */}
        <div
          className="
            w-full
            lg:w-[500px]
            relative
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              bg-cyan-500/30
              blur-[130px]
              rounded-full
            "
          ></div>

          {/* Card with Wider & Thicker Border */}
          <div
            className="
              relative
              bg-white/5
              border-[14px] border-cyan-400/50
              backdrop-blur-3xl
              rounded-[45px]
              p-3.5
              shadow-2xl
              shadow-cyan-500/40
            "
          >
            <img
              src={heroImage}
              alt="Hero"
              className="
                w-full
                h-[330px]
                object-cover
                rounded-[32px]
                border-4 border-white/45
                hover:scale-[1.02]
                transition-all duration-500
              "
            />

            {/* Discount Badge */}
            <div
              className="
                absolute
                top-9
                left-9
                px-6 py-3
                rounded-xl
                bg-gradient-to-r
                from-red-600
                to-pink-600
                text-white
                font-extrabold
                text-base
                shadow-xl
                animate-pulse
              "
            >
              خصم حتى 50% 🔥
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero