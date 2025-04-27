import "./styles/projects.css";
import { AnimatePresence, motion } from "framer-motion";
import { assets } from "../assets/index.js";
import { TbWorldCode } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaGithub, FaPaintBrush } from "react-icons/fa";

const Projects = () => {
  return (
    <AnimatePresence mode="wait">
      <main className="Projects">
        <div className="projectsContainer">
          <div className="projectsAtas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "linear" }}
              className="projectsTitleAtas">
              <div className="iconContainerProjects">
                <TbWorldCode className="iconGlobeProjects" />
              </div>
              <span className="websiteTitleProjects">Website</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "linear" }}
              className="classContainerForCardProjects">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "linear" }}
                className="cardContentProjects">
                <img className="classImageAssets" src={assets.youtube} alt="" />
                <div className="titleDescDanButtonCTA">
                  <h3 className="titleCardProjectsWebsite">Youtube Clone</h3>
                  <p className="desProjectsWebsite">
                    A simple video streaming platform, allowing users to simply
                    watch and search for content.
                  </p>
                  <div className="buttonCTAProjects">
                    <div className="iconGithubContainer">
                      <FaGithub className="iconGithubProjects" />
                    </div>
                    <Link
                      target="_blank"
                      to={"https://renstube.vercel.app/"}
                      className="linkToWebsite">
                      Visit
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3, ease: "linear" }}
                className="cardContentProjects">
                <img className="classImageAssets" src={assets.gemini} alt="" />
                <div className="titleDescDanButtonCTA">
                  <h3 className="titleCardProjectsWebsite">Gemini Clone</h3>
                  <p className="desProjectsWebsite">
                    AI-based information search application, focused on reading
                    and finding quick answers.
                  </p>
                  <div className="buttonCTAProjects">
                    <div className="iconGithubContainer">
                      <FaGithub className="iconGithubProjects" />
                    </div>
                    <Link
                      target="_blank"
                      to={"https://rensbotai.vercel.app/"}
                      className="linkToWebsite">
                      Visit
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6, ease: "linear" }}
                className="cardContentProjects">
                <img
                  className="classImageAssets"
                  src={assets.dashboard}
                  alt=""
                />
                <div className="titleDescDanButtonCTA">
                  <h3 className="titleCardProjectsWebsite">Simple Dashboard</h3>
                  <p className="desProjectsWebsite">
                    Modern e-commerce admin dashboard to view, manage and
                    analyze business data with visualizations.
                  </p>
                  <div className="buttonCTAProjects">
                    <div className="iconGithubContainer">
                      <FaGithub className="iconGithubProjects" />
                    </div>
                    <Link
                      target="_blank"
                      to={"https://dashboard-sample-one.vercel.app/"}
                      className="linkToWebsite">
                      Visit
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.9, ease: "linear" }}
                className="cardContentProjects">
                <img className="classImageAssets" src={assets.netflix} alt="" />
                <div className="titleDescDanButtonCTA">
                  <h3 className="titleCardProjectsWebsite">Netflix Clone</h3>
                  <p className="desProjectsWebsite">
                    Netflix Clone with login and signup, allows users to watch
                    only movie and series trailers.
                  </p>
                  <div className="buttonCTAProjects">
                    <div className="iconGithubContainer">
                      <FaGithub className="iconGithubProjects" />
                    </div>
                    <Link
                      target="_blank"
                      to={"https://netfilxbjir.vercel.app/"}
                      className="linkToWebsite">
                      Visit
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "linear" }}
            className="projectsBawah">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "linear" }}
              className="projectsTitleAtas">
              <div className="iconContainerProjects">
                <FaPaintBrush className="iconGlobeProjects fzKecil" />
              </div>
              <span className="websiteTitleProjects">Design</span>
            </motion.div>
            <div className="contentBawahProjects">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorBiru}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorCouple}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorAngga}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorIblis}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.7, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorKuning}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorKuningTopi}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.9, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorSimple}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorSusanoO}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.1, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorTekek}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2, ease: "linear" }}
                className="classForContentBawah"
                src={assets.vectorWajah}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </main>
    </AnimatePresence>
  );
};

export default Projects;
