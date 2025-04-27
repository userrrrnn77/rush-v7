import "./styles/navbar.css";
import logoNav from "../assets/logo_dark.png";
import { NavLink, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaFileAlt, FaFolderOpen, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const [navActive, setNavActive] = useState("/home");

  return (
    <motion.nav
      initial={{ top: -100, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.1, ease: "linear" }}
      className="navbar">
      <div className="logonav">
        <img className="logoBoy" src={logoNav} alt="" />
      </div>
      <div className="listsnav">
        <NavLink
          onClick={() => setNavActive("/home")}
          className={`navLink ${path == "/home" ? "navActive" : ""}`}
          to={"/home"}>
          <IoHome className="iconNavList" />
          <span className="subTitleNav">Home</span>
        </NavLink>
        <NavLink
          onClick={() => setNavActive("/about")}
          className={`navLink ${path == "/about" ? "navActive" : ""}`}
          to={"/about"}>
          <FaFileAlt className="iconNavList" />
          <span className="subTitleNav">Resume</span>
        </NavLink>
        <NavLink
          onClick={() => setNavActive("/projects")}
          className={`navLink ${path == "/projects" ? "navActive" : ""}`}
          to={"/projects"}>
          <FaFolderOpen className="iconNavList" />
          <span className="subTitleNav">Projects</span>
        </NavLink>
        <NavLink
          onClick={() => setNavActive("/contact")}
          className={`navLink ${path == "/contact" ? "navActive" : ""}`}
          to={"/contact"}>
          <FaPhone className="iconNavList" />
          <span className="subTitleNav">Contacts</span>
        </NavLink>
      </div>
    </motion.nav>
  );
};

export default Navbar;
