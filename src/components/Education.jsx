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
              <span className="codeTitle">Code Academy</span>
              <span className="codeSubTitle">Backend Developer</span>
            </h4>
            <p className="yearEducationCard">2025 - 2025</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Destroy Skills</span>
              <span className="codeSubTitle">Web Developer</span>
            </h4>
            <p className="yearEducationCard">2024 - 2025</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Code Camp</span>
              <span className="codeSubTitle">Frontend Developer</span>
            </h4>
            <p className="yearEducationCard">2024 - 2025</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Code OP</span>
              <span className="codeSubTitle">Course Javascript</span>
            </h4>
            <p className="yearEducationCard">2023 - 2024</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">ADA Developer Academy</span>
              <span className="codeSubTitle">Responsive Web Design</span>
            </h4>
            <p className="yearEducationCard">2023 -2024</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">FreeCodeCamp</span>
              <span className="codeSubTitle">Data Structures</span>
            </h4>
            <p className="yearEducationCard">2023 - 2024</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Strong Coder</span>
              <span className="codeSubTitle">Data Visualization</span>
            </h4>
            <p className="yearEducationCard">2023 - 2024</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">My Skill</span>
              <span className="codeSubTitle">Ui/Ux Design</span>
            </h4>
            <p className="yearEducationCard">2022 - 2023</p>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">SMKN 11 Semarang</span>
              <span className="codeSubTitle">Grapich Design</span>
            </h4>
            <p className="yearEducationCard">2019 - 2022</p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Education;
