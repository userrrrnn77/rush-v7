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
              <span className="codeTitle">Pramuniaga</span>
              <span className="codeSubTitle">ADA Swalayan</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2024 - 2025</p>
              <p className="yearEducationCardJenis">On Site</p>
            </div>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Cleaning Service</span>
              <span className="codeSubTitle">RS Roemani Semarang</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2024 - 2024</p>
              <p className="yearEducationCardJenis">On Site</p>
            </div>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Designer & Customer Service</span>
              <span className="codeSubTitle">Indoprinting</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2023 - 2024</p>
              <p className="yearEducationCardJenis">On Site</p>
            </div>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Baker</span>
              <span className="codeSubTitle">CV Margo Gandhum</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2022 - 2023</p>
              <p className="yearEducationCardJenis">On Site</p>
            </div>
          </div>
          <div className="cardGridEducation">
            <h4 className="titleEducationCard">
              <span className="codeTitle">Designer & Quality Control</span>
              <span className="codeSubTitle">CV Gajah Mandiri</span>
            </h4>
            <div className="kananExp">
              <p className="yearEducationCardkontol">2022 - 2022</p>
              <p className="yearEducationCardJenis">On Site</p>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Experience;
