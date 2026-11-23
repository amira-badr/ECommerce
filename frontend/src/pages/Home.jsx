import Hero from "../components/Hero"
import Features from "../components/Features"
import Categories from "../components/Categories"
import Offer from "../components/Offer"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      {/* 🟢 قسم الهيرو */}
      <section id="home">
        <Hero />
      </section>

      {/* 🟣 قسم المميزات */}
      <section id="features">
        <Features />
      </section>

      {/* 🟠 قسم التصنيفات */}
      <section id="categories">
        <Categories />
      </section>

      {/* 🛍️ قسم المتجر */}
      <section id="shop">
        <Offer />
      </section>

      {/* 📩 قسم التواصل */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

export default Home