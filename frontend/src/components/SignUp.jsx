import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const onChangeHandler = (event) => {

    const name = event.target.name
    const value = event.target.value

    setFormData((data) => ({
      ...data,
      [name]: value,
    }))

  }

  const onSubmitHandler = (event) => {

    event.preventDefault()

    console.log(formData)

    navigate("/login")

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

        py-24 px-6 sm:px-10

        flex items-center justify-center
      "
    >

      {/* الخلفية */}
      <div
        className="
          absolute inset-0

          bg-black/40
          backdrop-blur-sm

          pointer-events-none
        "
      ></div>

      {/* الكارد */}
      <div
        className="
          relative z-10

          w-full max-w-md

          bg-white/5
          border border-white/10

          backdrop-blur-2xl

          p-10

          rounded-[35px]

          shadow-2xl
        "
      >

        <h2
          className="
            text-4xl
            font-extrabold

            mb-8

            text-center
          "
        >
          إنشاء حساب جديد
        </h2>

        <form
          onSubmit={onSubmitHandler}
          className="
            flex flex-col gap-6
          "
        >

          {/* الاسم */}
          <input
            type="text"
            name="name"
            placeholder="الاسم الكامل"

            value={formData.name}

            onChange={onChangeHandler}

            required

            className="
              bg-white/5

              border border-white/10

              p-4

              rounded-2xl

              text-white

              placeholder-slate-400

              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400

              transition-all
            "
          />

          {/* الإيميل */}
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"

            value={formData.email}

            onChange={onChangeHandler}

            required

            className="
              bg-white/5

              border border-white/10

              p-4

              rounded-2xl

              text-white

              placeholder-slate-400

              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400

              transition-all
            "
          />

          {/* الباسورد */}
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"

            value={formData.password}

            onChange={onChangeHandler}

            required

            className="
              bg-white/5

              border border-white/10

              p-4

              rounded-2xl

              text-white

              placeholder-slate-400

              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400

              transition-all
            "
          />

          {/* تأكيد الباسورد */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="تأكيد كلمة المرور"

            value={formData.confirmPassword}

            onChange={onChangeHandler}

            required

            className="
              bg-white/5

              border border-white/10

              p-4

              rounded-2xl

              text-white

              placeholder-slate-400

              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400

              transition-all
            "
          />

          {/* الزر */}
          <button
            type="submit"

            className="
              mt-2

              bg-gradient-to-r
              from-cyan-500
              via-sky-500
              to-blue-600

              px-6 py-4

              rounded-2xl

              font-bold
              text-lg

              text-white

              hover:scale-105
              hover:shadow-cyan-500/40

              transition-all duration-300

              shadow-xl
              shadow-cyan-500/20
            "
          >
            إنشاء الحساب
          </button>

        </form>

        {/* تسجيل الدخول */}
        <p
          className="
            mt-8

            text-center

            text-slate-300
          "
        >

          لديك حساب بالفعل ؟{" "}

          <span
            onClick={() => navigate("/login")}

            className="
              text-cyan-400

              font-semibold

              cursor-pointer

              hover:text-cyan-300
              hover:underline

              transition-all
            "
          >
            تسجيل الدخول
          </span>

        </p>

      </div>

    </section>

  )

}

export default SignUp