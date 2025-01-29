import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startCount = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(startCount + (end - startCount) * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
};

export default function MindfulnessSection() {
  return (
    <section className="mindfulness-section py-5">
      <div className="container text-center text-white">
        <h1 className="heading mb-4">How and Where to Learn Mindfulness</h1>
        <p className="description mb-5">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="course-types mb-5">
          <h2 className="heading mb-4">Introductory Courses, Taster Sessions, and Groups</h2>
          <h2 className="course-type">Formal Mindfulness Courses</h2>
        </div>

        <div className="row stats-grid g-4">
          <div className="col-6 col-md-3">
            <div className="stat-card rounded shadow p-4">
              <AnimatedCounter end={5} suffix="k" />
              <div className="stat-label">Participants</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card rounded shadow p-4">
              <AnimatedCounter end={60} suffix="%" />
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card rounded shadow p-4">
              <AnimatedCounter end={100} />
              <div className="stat-label">Sessions Conducted</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card rounded shadow p-4">
              <AnimatedCounter end={1230} />
              <div className="stat-label">Total Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
