import "./styles/education.css";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "linear", delay: 0.8 }}
        className="education">
        <div className="titleEducation">
          <h1 className="hSatuEducation">
            <FaUserGraduate className="iconEducation" />
            <span className="titleSubHsatu">My Education</span>
          </h1>
        </div>
        <div className="gridEducation">
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Programing Otodidak</span>
              <span className="codeSubTitle">Web Developer</span>
            </h4>
            <p className="yearEducationCard">2024 - Present</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">SMKN 11 Semarang</span>
              <span className="codeSubTitle">Grapich Design</span>
            </h4>
            <p className="yearEducationCard">2019 - 2022</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">SMPN 33 Semarang</span>
              <span className="codeSubTitle">Design Otodidak</span>
            </h4>
            <p className="yearEducationCard">2016 - 2019</p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Education;
