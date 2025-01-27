import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import videoOne from "../assets/videos/one.mp4";
import videosecond from "../assets/videos/second.mp4";
import videothird from "../assets/videos/third.mp4";

const TeamMember = ({ name, role, description, videoUrl, isPlaying, onPlay, onStop }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="team-member card border-0 shadow">
        <div className="video-wrapper">
          <ReactPlayer
            url={videoUrl}
            playing={isPlaying}
            muted={!isPlaying} // Unmute when playing
            controls={false}
            width="100%"
            height="200px"
            className="react-player"
          />

          <div className="video-controls d-flex justify-content-center mt-2">
            <button
              onClick={onPlay}
              className="btn btn-success me-2"
              disabled={isPlaying} // Disable play button if already playing
            >
              Play
            </button>
            <button
              onClick={onStop}
              className="btn btn-danger"
              disabled={!isPlaying} // Disable stop button if not playing
            >
              Stop
            </button>
          </div>

        </div>
        <div className="card-body text-center">
          <h3 className="member-name text-dark">{name}</h3>
          <div className="member-role text-success">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Shikhar Shukla",
      videoUrl: videoOne,
    },
    {
      name: "Vidhushi Nautiyal",
      videoUrl: videosecond,
    },
    {
      name: "Shaurya Agrwal",
      videoUrl: videothird,
    },
  ];

  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlay = (index) => {
    setPlayingVideo(index); // Set the current video to play
  };

  const handleStop = () => {
    setPlayingVideo(null); // Stop all videos
  };


  return (
    <section className="team-section py-5 bg-light">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h1 className="main-title text-dark">Meet our student</h1>
          <h2 className="sub-title text-success">Our success stories</h2>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              isPlaying={playingVideo === index}
              onPlay={() => handlePlay(index)}
              onStop={handleStop}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
