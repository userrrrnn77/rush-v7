import "./styles/home.css";
import TypeWriter from "../components/TypeWriter";
import { AnimatePresence, motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import CountUp from "react-countup";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const stats = [
  {
    num: 16,
    text: "Projects Completed",
  },
  {
    num: 2,
    text: "Year Experience",
  },
  {
    num: 12,
    text: "Technologies Mastered",
  },
  {
    num: 203,
    text: "Code Commits",
  },
];

const StatsComponent = React.memo(({ stats }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      style={{ position: "relative" }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.8, ease: "linear" }}
      className="homeBagianBawah">
      {stats.map((item, index) => (
        <div key={index} className="statsAngkaDanHuruf">
          <h1 className="angkaStats">
            <CountUp end={item.num} duration={5} delay={2.5} />
          </h1>
          <p className="hurufTextHome">
            {item.text.split(" ").map((word, idx) => (
              <React.Fragment key={idx}>
                {word}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </motion.div>
  );
});

const Home = () => {
  const lottieOptions = {
    src: "https://lottie.host/1bafa3fd-65d5-43c6-b4e1-cd78c80a6b11/2TTi1OTYHg.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
      renderdFrame: 10,
    },
    className: "dotLottieClassName",
  };

  const AnimasiLottie = () => {
    return <DotLottieReact {...lottieOptions} />;
  };

  const renderStats = useCallback(() => {
    return <StatsComponent stats={stats} />;
  }, [stats]);

  return (
    <AnimatePresence mode="wait">
      <main className="home">
        <div className="homeContainer">
          <div className="homeKananKiri">
            <div className="homeBagianKiri">
              <div className="introSaya">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5, ease: "linear" }}
                  style={{ position: "relative" }}
                  className="sayHiBoy">
                  Hi, There!
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8, ease: "linear" }}
                  style={{ position: "relative" }}
                  className="flexName">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.1, ease: "linear" }}
                    style={{ position: "relative" }}
                    className="sayName">
                    Here is,{" "}
                  </motion.span>
                  <TypeWriter
                    className="homeNameSaya"
                    deletingSpeed={120}
                    pause={1500}
                    typingSpeed={150}
                    texts={["Rendy Rush."]}
                  />
                </motion.div>
              </div>
              <div className="workAs">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.4, ease: "linear" }}
                  style={{ position: "relative" }}
                  className="textGlowHome">
                  I'm a{" "}
                </motion.span>
                <motion.span
                className="spanNgentod"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ position: "relative" }}
                  transition={{ duration: 1, delay: 2.7, ease: "linear" }}>
                  <TypeWriter
                    className="WorkAsTypeWriter"
                    deletingSpeed={100}
                    pause={1500}
                    typingSpeed={100}
                    texts={[
                      "Web Developer",
                      "Front-End Developer",
                      "Web Designer",
                    ]}
                  />
                </motion.span>
              </div>
              <div className="descriptionHome">
                <motion.p
                  initial={{ opacity: 0 }}
                  style={{ position: "relative" }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3, ease: "linear" }}
                  className="descriptionP">
                  I am very enthusiastic about collaboration, work, or anything
                  that aims to develop my skills and experience. and I prefer to
                  contribute more to a task. Feel free to explore my portfolio
                  reach out I'd love to connect!
                </motion.p>
              </div>
              <div className="SosmedStack">
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ position: "relative" }}
                  animate={{ left: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3.3, ease: "linear" }}
                  className="iconContainerHome">
                  <FaFacebookF className="iconHome" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ position: "relative" }}
                  animate={{ left: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3.6, ease: "linear" }}
                  className="iconContainerHome">
                  <FaInstagram className="iconHome" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ position: "relative" }}
                  animate={{ left: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3.9, ease: "linear" }}
                  className="iconContainerHome">
                  <FaThreads className="iconHome" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ position: "relative" }}
                  animate={{ left: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 4.2, ease: "linear" }}
                  className="iconContainerHome">
                  <FaTiktok className="iconHome" />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              style={{ position: "relative" }}
              animate={{ left: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 4.4, ease: "linear" }}
              className="homeBagianKanan">
              <AnimasiLottie />
            </motion.div>
          </div>
          {renderStats()}
        </div>
      </main>
    </AnimatePresence>
  );
};

export default Home;
