import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
} from "lucide-react"

const featuresData = [

  {
    Icon: Truck,

    title: "شحن سريع",

    desc: "على جميع الطلبات فوق $100 يتم الشحن مجاناً لجميع أنحاء العالم.",

    color: `
      from-cyan-500
      via-sky-500
      to-blue-600
    `,
  },

  {
    Icon: ShieldCheck,

    title: "دفع آمن",

    desc: "استمتع بتجربة شراء آمنة 100% مع حماية كاملة لبياناتك.",

    color: `
      from-emerald-500
      via-green-500
      to-lime-500
    `,
  },

  {
    Icon: RefreshCcw,

    title: "إرجاع سهل",

    desc: "إرجاع واستبدال المنتجات بسهولة خلال 14 يوماً.",

    color: `
      from-fuchsia-500
      via-purple-500
      to-pink-500
    `,
  },

  {
    Icon: Headphones,

    title: "دعم 24/7",

    desc: "فريقنا جاهز لمساعدتك في أي وقت وعلى مدار الساعة.",

    color: `
      from-orange-400
      via-amber-500
      to-yellow-500
    `,
  },

]

const Features = () => {

  return (

    <section
      className="
        relative

        w-full

        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-cyan-950

        py-24
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

          max-w-7xl mx-auto

          px-6 sm:px-10

          text-center
        "
      >

        {/* Title */}
        <h2
          className="
            text-4xl sm:text-5xl

            font-extrabold

            text-white

            mb-16
          "
        >
          لماذا تختارنا؟
        </h2>

        {/* Cards */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-8
          "
        >

          {featuresData.map(
            (
              {
                Icon,
                title,
                desc,
                color,
              },

              index
            ) => (

              <div
                key={index}

                className="
                  bg-white/5

                  border border-white/10

                  backdrop-blur-2xl

                  rounded-[30px]

                  p-8

                  shadow-2xl

                  flex flex-col
                  items-center

                  text-center

                  transition-all duration-500

                  hover:-translate-y-2
                  hover:shadow-cyan-500/20
                "
              >

                {/* Icon */}
                <div
                  className={`
                    bg-gradient-to-r

                    ${color}

                    w-20 h-20

                    rounded-3xl

                    flex items-center justify-center

                    shadow-xl

                    mb-6
                  `}
                >

                  <Icon
                    className="
                      w-10 h-10

                      text-white
                    "
                  />

                </div>

                {/* Title */}
                <h3
                  className="
                    text-2xl

                    font-bold

                    text-white

                    mb-4
                  "
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-slate-300

                    text-base

                    leading-7
                  "
                >
                  {desc}
                </p>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  )
}

export default Features