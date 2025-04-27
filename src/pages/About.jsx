import React, { useState } from "react";
import "./styles/about.css";
import myPhoto from "../assets/myPicture.jpg";
import TypeWriter from "../components/TypeWriter";
import Education from "../components/Education";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import Certificate from "../components/Certificate";
import mapsgambar from "../assets/maps.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { FaGraduationCap, FaMedal, FaUser } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { FaCode, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiCoreldraw } from "react-icons/si";

const About = () => {
  const [profile, setProfile] = useState("education");

  const renderProfile = () => {
    switch (profile) {
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "about":
        return <AboutMe />;
      case "certificate":
        return <Certificate />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <main className="about">
        <div className="aboutContainer">
          <div className="kananKiriAbout">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "linear", delay: 0.4 }}
              className="aboutKiri">
              <div className="titleAbout">
                <span className="sayHiAbout">Hi, I'm</span>
                <img className="myPhoto" src={myPhoto} alt="" />
                <span>
                  <TypeWriter
                    className="MyNameAbout"
                    deletingSpeed={150}
                    pause={1200}
                    typingSpeed={80}
                    texts={["Rendy Rush!"]}
                  />
                </span>
              </div>
              <p className="descriptAbout">
                Feel free to explore my portfolio and reach out i'd love to
                connect!
              </p>
              <div className="buttonSwitchCase">
                <button
                  onClick={() => setProfile("education")}
                  className={`buttonSwitchResume ${
                    profile == "education" ? "profileActive" : ""
                  }`}>
                  <FaGraduationCap className="iconButtonResume" />
                  Education
                </button>
                <button
                  onClick={() => setProfile("experience")}
                  className={`buttonSwitchResume ${
                    profile == "experience" ? "profileActive" : ""
                  }`}>
                  <IoLayers className="iconButtonResume" />
                  Experience
                </button>
                <button
                  onClick={() => setProfile("certificate")}
                  className={`buttonSwitchResume ${
                    profile == "certificate" ? "profileActive" : ""
                  }`}>
                  <FaMedal className="iconButtonResume" />
                  Ahievement
                </button>
                <button
                  onClick={() => setProfile("about")}
                  className={`buttonSwitchResume ${
                    profile == "about" ? "profileActive" : ""
                  }`}>
                  <FaUser className="iconButtonResume" />
                  About Me
                </button>
              </div>
            </motion.div>
            <div className="aboutKanan">{profile && renderProfile()}</div>
          </div>
          <div className="bagianBawahResume">
            <div className="kananKiri">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "linear", delay: 1 }}
                className="bagianBawahKiri">
                <img className="mapsGmabr" src={mapsgambar} alt="" />
                <div className="gradientMaps" />
                <div className="spanDiv">
                  <span className="spanSemarang">Semarang, Indonesia</span>
                  <span className="spanSemarang">-6.966667, 110.416664</span>
                </div>
                <div className="mapsTitleMaps">Maps</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "linear", delay: 1.5 }}
                className="BagianBawahkanan">
                <div className="titleMySkill">
                  <h2 className="titlehDua">
                    <FaCode className="titleHDuaIcon" />
                  </h2>
                  <span className="JetBrainsMono">My Skill</span>
                </div>
                <div className="gridIconResumeKananBawah">
                  <div className="iconContainerGrid">
                    <FaHtml5 className="iconGridKananBawah" />
                  </div>
                  <div className="iconContainerGrid">
                    <FaCss3Alt className="iconGridKananBawah" />
                  </div>
                  <div className="iconContainerGrid">
                    <IoLogoJavascript className="iconGridKananBawah" />
                  </div>
                  <div className="iconContainerGrid">
                    <FaReact className="iconGridKananBawah" />
                  </div>
                  <div className="iconContainerGrid">
                    <RiNextjsFill className="iconGridKananBawah" />
                  </div>
                  <div className="iconContainerGrid">
                    <FaNodeJs className="iconGridKananBawah" />
                  </div>
                  <div className="iconContainerGrid">
                    <SiCoreldraw className="iconGridKananBawah" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </AnimatePresence>
  );
};

export default About;
