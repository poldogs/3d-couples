import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="#">
            <FaFacebook alt="3dcouples-facebook" />
          </a>
          <a href="#">
            <FaInstagram alt="3dcouples-instagram" />
          </a>
          <a href="#">
            <FaYoutube alt="3dcouples-youtube" />
          </a>
          <a href="#">
            <FaTiktok alt="3dcouples-tiktok" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
