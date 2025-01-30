import React from "react";

export default function MentorsSection() {
  const backgrounds = [
    require("../assets/images/eye.png"),
    require("../assets/images/kidny.png"),
    require("../assets/images/lady.jpg"),
    require("../assets/images/some.png"),
  ];

  return (
    <section className="mentors-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="section-title">
            <span className="highlight">Not</span> 1 But <span className="highlight">4</span> Mentors!
          </h1>
          <p className="section-subtitle">
            If you dream about cracking NEET, we are here to provide you with not only 1 but 4 personal subject experts
            who can help make your dream come true!
          </p>
        </div>

        {/* Expert Card */}
        <div className="expert-card bg-light shadow-sm p-4 rounded">
          <div className="row g-4 align-items-center">
            {/* Expert Image */}
            <div className="col-md-4">
              <img
                src={require("../assets/images/four.png")}
                alt="Biology Expert"
                className="expert-image img-fluid rounded"
              />
            </div>

            {/* Expert Content */}
            <div className="col-md-8">
              <div className="expert-content">
                <h2 className="h3 mb-3">Biology Expert Mentor</h2>
                <p className="mb-4">
                  Get clarity on topics with your personal mentor with 6+ years of experience. The mentor will be
                  available to you during the program and help you understand all the difficulties you may face during
                  your preparation!
                </p>

                {/* Mentor Grid */}
                <div className="mentor-grid d-flex flex-wrap justify-content-center gap-3">
                  {backgrounds.map((image, index) => (
                    <div key={index} className="mentor-card">
                      <img
                        src={image}
                        alt={`Mentor ${index + 1}`}
                        className="mentor-image rounded-circle"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
