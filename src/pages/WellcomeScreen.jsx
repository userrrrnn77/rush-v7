import "./styles/wellcomeScrenn.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const WellcomeScreen = () => {
  const navigate = useNavigate();
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlur(true);
      setTimeout(() => {
        navigate("/home");
      }, 620);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <AnimatePresence mode="wait">
      <main className="wellcomeScreen">
        <div className="glowWellcomeScreenKiriAtas" />
        <div className="glowWellcomeScreenKananBawah" />
        <div className="wellcomeScreenContainer">
          <div className="iconWellcomeScreen">
            <motion.div
              initial={{ top: -100, opacity: 0 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="iconContainer">
              <FaCode className="iconWellcome" />
            </motion.div>
            <motion.div
              initial={{ top: -100, opacity: 0 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              className="iconContainer">
              <RiComputerLine className="iconWellcome" />
            </motion.div>
            <motion.div
              initial={{ top: -100, opacity: 0 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
              className="iconContainer">
              <FaPaintBrush className="iconWellcome" />
            </motion.div>
          </div>
          <div className="titleWellcomeScreen">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeIn" }}
              className="titleSatu">
              <span className="wellcomeSpan">Wellcome</span>
              <motion.span
                initial={{ top: 0 }}
                animate={{ top: -25 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "linear" }}
                className="subWelcomeOutline">
                Wellcome
              </motion.span>
              <motion.span
                initial={{ top: 0 }}
                animate={{ top: 25 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "linear" }}
                className="subWelcomeOutline">
                Wellcome
              </motion.span>
            </motion.h1>
            <div className="subTitle">
              <motion.h1
                initial={{ bottom: -100, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.6, ease: "easeIn" }}
                className="subTitleSatu">
                My
              </motion.h1>
              <motion.h1
                initial={{ bottom: -100, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.8, ease: "easeIn" }}
                className="subTitleSatu">
                Portfolio
              </motion.h1>
              <motion.h1
                initial={{ bottom: -100, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: 1, ease: "easeIn" }}
                className="subTitleSatu">
                Website
              </motion.h1>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, bottom: -100 }}
            animate={{ opacity: 1, bottom: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="websiteSiteUrl">
            <IoGlobeOutline className="globeIcon" />
            <span className="textSubUrl">https://rush-v7.vercel.app</span>
          </motion.div>
        </div>
      </main>
      <div className={`blurEffect ${blur ? "blurAktif" : ""}`}></div>
    </AnimatePresence>
  );
};

export default WellcomeScreen;
