import React, { useState, useEffect } from "react"
import { useScrollDirection } from "../hooks/userScroll"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoColor, setLogoColor] = useState("#2C3E50")
  const scrollDirection = useScrollDirection()

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Our Service", path: "/service" },
    { title: "Contact", path: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      const newColor = `hsl(${scroll % 360}, 50%, 50%)`
      setLogoColor(newColor)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${scrollDirection === "down" ? "hidden" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
          <img src={require('../assets/images/logo.jpg')} alt="Logo" className="brand-logo" />
          <span className="brand-text">Doct Talk</span>
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-nav ms-auto d-none d-lg-flex align-items-center">
            {navItems.map((item) => (
              <a key={item.title} href={item.path} className="nav-link">
                {item.title}
              </a>
            ))}

            {!isSearchOpen ? (
              <button className="search-button" onClick={() => setIsSearchOpen(true)}>
                <i className="bi bi-search"></i>
              </button>
            ) : (
              <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." autoFocus />
                <button className="close-button" onClick={() => setIsSearchOpen(false)}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="navbar-toggler d-lg-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`bi bi-${isMobileMenuOpen ? "x-lg" : "list"}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="d-flex flex-column gap-4">
          {navItems.map((item) => (
            <a key={item.title} href={item.path} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {item.title}
            </a>
          ))}
          <div className="search-container mt-4">
            <input type="text" className="search-input w-100" placeholder="Search..." />
          </div>
        </div>
      </div>
    </header>
  )
}

