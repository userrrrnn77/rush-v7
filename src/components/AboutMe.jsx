import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import "./styles/aboutaMe.css";

const AboutMe = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "linear", delay: 0.8 }}
        className="aboutme">
        <div className="titleABoutMe">
          <h2 className="titledaniconAboutMe">
            <BsFillFileEarmarkPersonFill className="iconAboutMe" />
            <span className="aboutMeSpan">About Me</span>
          </h2>
          <p className="descAboutMeSpanP">
            I am a Front-End Developer with over 2 years of experience in
            building responsive and interactive user interfaces. My focus is on
            creating seamless user experiences using modern technologies like
            React, Vue, and Tailwind CSS. I am always interested in visual
            details and optimal application performance.
          </p>
        </div>
        <div className="contentAboutMe">
          <div className="gridCardContentAboutMe">
            <h2 className="Quest">Name</h2>
            <h3 className="Answers">Rendy Rush</h3>
          </div>
          <div className="gridCardContentAboutMe">
            <h2 className="Quest">Experience</h2>
            <h3 className="Answers">2+ Years</h3>
          </div>
          <div className="gridCardContentAboutMe">
            <h2 className="Quest">Nationality</h2>
            <h3 className="Answers">Indonesia</h3>
          </div>
          <div className="gridCardContentAboutMe">
            <h2 className="Quest">Skype</h2>
            <h3 className="Answers">Rens.77</h3>
          </div>
          <div className="gridCardContentAboutMe">
            <h2 className="Quest">Email</h2>
            <h3 className="Answers">rendyharvest@gmail.com</h3>
          </div>
          <div className="gridCardContentAboutMe">
            <h2 className="Quest">Freelance</h2>
            <h3 className="Answers">Available</h3>
          </div>
          <div className="gridCardContentAboutMe">
            <h2 className="Quest">Languages</h2>
            <h3 className="Answers">Indonesia, English</h3>
          </div>
          <div className="gridCardContentAboutMe">
            <h2 className="Quest">Phone</h2>
            <h3 className="Answers">(+62)8146 0353 320</h3>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default AboutMe;
