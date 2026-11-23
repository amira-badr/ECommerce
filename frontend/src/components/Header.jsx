import { useState, useEffect } from "react"

import {
  Rocket,
  Menu,
  X,
} from "lucide-react"

import MenuItems from "./MenuItems"

const Header = () => {

  const [sideBarOpen, setSideBarOpen] =
    useState(false)

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth >= 640) {
        setSideBarOpen(false)
      }

    }

    window.addEventListener(
      "resize",
      handleResize
    )

    handleResize()

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      )

  }, [])

  return (
    <>

      {/* Desktop Header */}
      <header
        className="
          hidden md:flex
          items-center
          justify-between
          h-16
          px-10
          fixed top-0 left-0
          w-full
          z-50

          bg-gradient-to-r
          from-slate-950
          via-slate-900
          to-cyan-950

          border-b border-white/10
          backdrop-blur-xl
          shadow-2xl
        "
      >

        {/* Logo */}
        <div
          className="
            flex items-center gap-3
          "
        >

          <div
            className="
              p-2 rounded-2xl
              bg-cyan-500/10
              border border-cyan-400/20
            "
          >

            <Rocket
              className="
                w-7 h-7
                text-cyan-400
                animate-pulse
              "
            />

          </div>

          <h1
            className="
              text-white
              font-extrabold
              text-2xl
              tracking-widest
            "
          >
            ECommerce
          </h1>

        </div>

        {/* Menu */}
        <MenuItems isMobile={false} />

      </header>

      {/* Mobile Header */}
      <header
        className="
          md:hidden
          flex items-center justify-between

          h-16
          px-5

          fixed top-0 left-0
          w-full
          z-50

          bg-gradient-to-r
          from-slate-950
          via-slate-900
          to-cyan-950

          border-b border-white/10
          backdrop-blur-xl
          shadow-xl
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              p-2 rounded-xl
              bg-cyan-500/10
            "
          >

            <Rocket
              className="
                w-6 h-6
                text-cyan-400
              "
            />

          </div>

          <h1
            className="
              text-white
              font-bold
              text-xl
              tracking-wider
            "
          >
            Neo-Shop
          </h1>

        </div>

        <button
          onClick={() =>
            setSideBarOpen(true)
          }
          className="
            text-white

            p-2 rounded-xl

            bg-white/5
            border border-white/10

            hover:bg-white/10
            transition-all duration-300
          "
        >

          <Menu className="w-7 h-7" />

        </button>

      </header>

      {/* Sidebar */}
      <aside
        className={`

          fixed top-0 right-0
          h-screen w-72

          bg-gradient-to-b
          from-slate-950
          via-slate-900
          to-cyan-950

          border-l border-white/10

          backdrop-blur-2xl
          shadow-2xl

          z-50

          transition-transform duration-500

          ${
            sideBarOpen
              ? "translate-x-0"
              : "translate-x-full"
          }

        `}
      >

        {/* Close */}
        <div
          className="
            flex justify-end
            p-5
          "
        >

          <button
            onClick={() =>
              setSideBarOpen(false)
            }
            className="
              p-3 rounded-xl

              bg-white/5
              border border-white/10

              hover:bg-red-500/20
              transition-all
            "
          >

            <X
              className="
                w-6 h-6 text-white
              "
            />

          </button>

        </div>

        {/* Menu */}
        <div
          className="
            px-6 mt-10
            space-y-8
          "
        >

          <MenuItems
            isMobile={true}
            setSideBarOpen={
              setSideBarOpen
            }
          />

        </div>

      </aside>

      {/* Overlay */}
      {sideBarOpen && (

        <div
          onClick={() =>
            setSideBarOpen(false)
          }
          className="
            md:hidden

            fixed inset-0
            z-40

            bg-black/70
            backdrop-blur-sm
          "
        />

      )}

    </>
  )
}

export default Header