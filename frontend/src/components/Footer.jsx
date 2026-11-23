import { useState } from "react"
import { Mail, Phone, MapPin, User, MessageSquare, Send } from "lucide-react"

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`شكراً لتواصلك معنا ${formData.name}!`)
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

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
        mt-24
        pt-20
        pb-20
        px-6
        sm:px-10
        flex
        flex-col
        justify-between
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
          max-w-[1300px]
          mx-auto
          w-full
        "
      >
        {/* Title */}
        <h2
          className="
            text-4xl
            sm:text-5xl
            font-extrabold
            mb-4
            text-center
          "
        >
          تواصل معنا
        </h2>

        <p
          className="
            text-slate-300
            mb-20
            text-center
            text-lg
            sm:text-xl
          "
        >
          نحن هنا لمساعدتك في أي وقت، أرسل لنا رسالة وسنرد عليك قريباً
        </p>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div
              className="
                flex items-center
                gap-5
                bg-white/5
                border border-white/10
                backdrop-blur-2xl
                p-6
                rounded-[30px]
                shadow-2xl
                hover:shadow-cyan-500/20
                transition-all duration-500
              "
            >
              <div
                className="
                  w-16 h-16
                  shrink-0
                  rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-blue-600
                  shadow-lg
                "
              >
                <MapPin
                  className="
                    w-7 h-7
                    text-white
                  "
                />
              </div>
              <div>
                <h4
                  className="
                    font-bold
                    text-lg
                    mb-1
                  "
                >
                  العنوان
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  شارع النخيل، مدينة المستقبل 123
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="
                flex items-center
                gap-5
                bg-white/5
                border border-white/10
                backdrop-blur-2xl
                p-6
                rounded-[30px]
                shadow-2xl
                hover:shadow-cyan-500/20
                transition-all duration-500
              "
            >
              <div
                className="
                  w-16 h-16
                  shrink-0
                  rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-blue-600
                  shadow-lg
                "
              >
                <Phone
                  className="
                    w-7 h-7
                    text-white
                  "
                />
              </div>
              <div>
                <h4
                  className="
                    font-bold
                    text-lg
                    mb-1
                  "
                >
                  الهاتف
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  +123 456 7890
                </p>
              </div>
            </div>

            {/* Email */}
            <div
              className="
                flex items-center
                gap-5
                bg-white/5
                border border-white/10
                backdrop-blur-2xl
                p-6
                rounded-[30px]
                shadow-2xl
                hover:shadow-cyan-500/20
                transition-all duration-500
              "
            >
              <div
                className="
                  w-16 h-16
                  shrink-0
                  rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-blue-600
                  shadow-lg
                "
              >
                <Mail
                  className="
                    w-7 h-7
                    text-white
                  "
                />
              </div>
              <div>
                <h4
                  className="
                    font-bold
                    text-lg
                    mb-1
                  "
                >
                  البريد الإلكتروني
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  support@ecommerce.com
                </p>
              </div>
            </div>
          </div>

          {/* Right: Sleek & Modern Form */}
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="
                w-full
                max-w-md
                bg-white/[0.06]
                border border-cyan-500/20
                backdrop-blur-3xl
                p-8
                sm:p-9
                rounded-[35px]
                shadow-2xl
                shadow-cyan-950/40
                flex flex-col
                gap-5
                relative
                overflow-hidden
              "
            >
              {/* Glow effect inside form */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="text-center mb-1">
                <h3 className="text-xl font-bold text-white mb-1">أرسل لنا رسالة 💬</h3>
                <p className="text-slate-400 text-xs sm:text-sm">املأ البيانات وسنتواصل معك قريباً</p>
              </div>

              {/* Name Input */}
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    py-3.5 pr-12 pl-4
                    rounded-2xl
                    text-white
                    placeholder-slate-400
                    focus:outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    transition-all
                    text-sm
                  "
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    py-3.5 pr-12 pl-4
                    rounded-2xl
                    text-white
                    placeholder-slate-400
                    focus:outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    transition-all
                    text-sm
                  "
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <MessageSquare className="absolute right-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
                <textarea
                  name="message"
                  placeholder="اكتب رسالتك..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    py-3.5 pr-12 pl-4
                    rounded-2xl
                    text-white
                    placeholder-slate-400
                    focus:outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    transition-all
                    resize-none
                    text-sm
                  "
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full
                  flex items-center justify-center
                  gap-2.5
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-blue-600
                  py-4
                  rounded-2xl
                  font-extrabold
                  text-base
                  text-white
                  shadow-xl
                  shadow-cyan-500/30
                  hover:scale-[1.02]
                  hover:shadow-cyan-500/50
                  transition-all duration-300
                  cursor-pointer
                "
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <footer
          className="
            mt-32
            pt-8
            border-t border-white/10
            text-center
            text-slate-400
          "
        >
          <p className="mb-4">
            © 2026 ECommerce. جميع الحقوق محفوظة.
          </p>
          <div
            className="
              flex
              justify-center
              gap-8
              flex-wrap
            "
          >
            <a href="#" className="hover:text-cyan-400 transition-all">
              فيسبوك
            </a>
            <a href="#" className="hover:text-cyan500 transition-all">
              تويتر
            </a>
            <a href="#" className="hover:text-cyan-400 transition-all">
              إنستجرام
            </a>
            <a href="#" className="hover:text-cyan-400 transition-all">
              لينكدإن
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer