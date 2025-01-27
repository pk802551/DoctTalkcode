import React, { useState, useEffect } from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollButton, setShowScrollButton] = useState(false)

  const quickLinks = [
    { text: "Home", },
    { text: "About Us", }, 
    { text: "Contact",  },
  ]

  const socialLinks = [
    { Icon: FaFacebookF, class: "facebook", link: "#" },
    { Icon: FaTwitter, class: "twitter", link: "#" },
    { Icon: FaInstagram, class: "instagram", link: "#" },
    { Icon: FaLinkedinIn, class: "linkedin", link: "#" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.pageYOffset / totalScroll) * 100
      setScrollProgress(currentProgress)
      setShowScrollButton(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes("@")) {
      setShowNotification(true)
      setEmail("")
      setTimeout(() => setShowNotification(false), 6000)
    }
  }

  return (
    <footer className="footer">
      <div className="progress-bar">
        <div className="progress-indicator" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Logo and About Section */}
          <div className="col-lg-3 col-md-6">
          <img src={require('../assets/images/logo.jpg')} alt="Logo" className="brand-logo" />
            <p className="footer-description">
              Empowering students to achieve their dreams through quality mentorship and guidance in NEET preparation.
            </p>
            <div className="social-links">
              {socialLinks.map(({ Icon, class: className, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className={`social-link ${className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            {quickLinks.map((link, index) => (
              <a key={index} href={link.path} className="quick-link">
                {link.text}
              </a>
            ))}
          </div>

          {/* Contact Info Section */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <span>123 Education Street, Learning City</span>
            </div>
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <span>+91 8529477906</span>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <span>ss689586@gmail.com</span>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="mb-3">Subscribe to our newsletter for updates and tips.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="subscribe-button">
                Subscribe <MdSend className="ms-2" />
              </button>
            </form>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Copyright Section */}
        <div className="row copyright-section">
          <div className="col-md-6">
            <p className="copyright mb-md-0">&copy; {new Date().getFullYear()} NEET Mentorship. All Rights Reserved.</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3 policy-links">
              <a href="/privacy" className="policy-link">
                Privacy Policy
              </a>
              <a href="/terms" className="policy-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top ${showScrollButton ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      {/* Notification Toast */}
      {showNotification && (
        <div className="toast">
          <span>Successfully subscribed to newsletter!</span>
        </div>
      )}
    </footer>
  )
}

