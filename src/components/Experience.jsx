import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { GiUpgrade } from "react-icons/gi";

const Experience = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "linear", delay: 0.8 }}
        className="education">
        <div className="titleEducation">
          <h1 className="hSatuEducation">
            <GiUpgrade className="iconEducation" />
            <span className="titleSubHsatu">My Experience</span>
          </h1>
        </div>
        <div className="gridEducation">
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Web3 Jobs</span>
              <span className="codeSubTitle">Full Stack Freelance</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2025 - 2025</p>
              <p className="yearEducationCardJenis">Remote</p>
            </div>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Help Portal</span>
              <span className="codeSubTitle">Full Stack</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2024 - 2025</p>
              <p className="yearEducationCardJenis">On Site</p>
            </div>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">CroCode_Id</span>
              <span className="codeSubTitle">Frontend Developer</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2024 - 2024</p>
              <p className="yearEducationCardJenis">On Site</p>
            </div>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Free Jobs</span>
              <span className="codeSubTitle">Frontend Freelance</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2023 - 2024</p>
              <p className="yearEducationCardJenis">Remote</p>
            </div>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">NetCode</span>
              <span className="codeSubTitle">Junior Frontend</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2022 - 2023</p>
              <p className="yearEducationCardJenis">Hybird</p>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Experience;
