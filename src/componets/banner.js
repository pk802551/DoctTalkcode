import React, { useState, useEffect } from "react"

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const backgrounds = [
    require('../assets/images/profiles.png'),
    require('../assets/images/doctors.png'),
    require('../assets/images/seven.webp')
  ];
  
  const slideContent = [
    {
      title: "Your Path to NEET Success Starts Here!",
      subtitle: "Join thousands of successful students",
      description: "Expert guidance, comprehensive study materials, and personalized mentoring",
    },
    {
      title: "Achieve Your Medical Dreams",
      subtitle: "95% success rate in NEET",
      description: "Interactive learning with experienced faculty members",
    },
    {
      title: "Prepare Smarter, Not Harder",
      subtitle: "Structured learning pathway",
      description: "Regular mock tests and performance analysis",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % backgrounds.length)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovered])

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length)
  }

  return (
    <section className="banner" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}

      {/* <img src="/placeholder.svg?height=60&width=60" alt="Logo" className="banner-logo" /> */}

      <div className="banner-content">
        <h1 className="banner-title">{slideContent[currentSlide].title}</h1>

        <h2 className="banner-subtitle">{slideContent[currentSlide].subtitle}</h2>

        <p className="banner-description">{slideContent[currentSlide].description}</p>

     
      </div>

      <button className="banner-nav prev" onClick={handlePrevSlide} aria-label="Previous slide">
        <i className="bi bi-chevron-left"></i>
      </button>

      <button className="banner-nav next" onClick={handleNextSlide} aria-label="Next slide">
        <i className="bi bi-chevron-right"></i>
      </button>

      <div className="banner-indicators">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            className={`banner-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

