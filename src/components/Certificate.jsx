import React from "react";
import { GiAchievement } from "react-icons/gi";
import "./styles/certificate.css";
import { AnimatePresence, motion } from "framer-motion";
import pertama from '../assets/BackendDev.png'
import kedua from '../assets/Front-endDev.png'
import ketiga from '../assets/Javascript.png'
import keempat from '../assets/StrongCoder.png'

const Certificate = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "linear", delay: 0.8 }}
        className="certificate">
        <h2 className="titledaniconAboutMe">
          <GiAchievement className="iconAboutMe" />
          <span className="aboutMeSpan">Certificate</span>
        </h2>
        <div className="gridCertificate">
          <img className="cetificateImage" src={pertama} alt="" />
          <img className="cetificateImage" src={kedua} alt="" />
          <img className="cetificateImage" src={ketiga} alt="" />
          <img className="cetificateImage" src={keempat} alt="" />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Certificate;
