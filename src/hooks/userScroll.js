import { useState, useEffect } from "react"

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState("up")

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll <= 0) {
        setScrollDir("up")
        return
      }

      if (currentScroll > lastScroll && scrollDir !== "down") {
        setScrollDir("down")
      } else if (currentScroll < lastScroll && scrollDir !== "up") {
        setScrollDir("up")
      }
      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollDir])

  return scrollDir
}

