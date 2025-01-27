import React, { useEffect, useState } from "react"

export default function CourseSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="course-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="heading mb-4">Each session of the mentorship program comprises</h1>
            <h2 className="subheading">Expert Insights & Solutions</h2>
            <p className="description mb-4">
              Each session of the mentorship program comprises expert guidance and tailored strategies to help businesses innovate and thrive. We empower organizations across various industries, including healthcare, blockchain, education, insurance, and more, by strengthening their ideas with customized solutions
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>

          <div className="col-lg-6">
            <div className="illustration text-center">
              <img
                src={require('../assets/images/five.webp')}
                alt="Tech skills illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="text-center">
              <div className="stat-number">65%</div>
              <div className="stat-label">Sample Headline</div>
              <p className="mt-2">Sample text. Click to select the Text Element.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <div className="stat-number">20%</div>
              <div className="stat-label">Sample Headline</div>
              <p className="mt-2">Sample text. Click to select the Text Element.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

