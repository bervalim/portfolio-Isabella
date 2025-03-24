import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Linkedin from "../../assets/linkedin-square.png";
import Behance from "../../assets/behance-square.png";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setIsMenuOpen(false);
          }
        };
      
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [isMenuOpen]);
  
    const navLinks = (
      <>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "paragraph menus active" : "paragraph menus")}
          onClick={() => setIsMenuOpen(false)}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/aboutMe"
          className={({ isActive }) => (isActive ? "paragraph menus active" : "paragraph menus")}
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT ME
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "paragraph menus active" : "paragraph menus")}
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </NavLink>
      </>
    );
  
    return (
      <header>
        <div className="container">
          <div className={styles.flexbox}>
            <div className={styles.left}>
              <Link to="/">
                <img src={Logo} alt="Elipse" />
              </Link>
              <nav className={styles.desktopNav}>{navLinks}</nav>
            </div>
  
            <div className={styles.rigth}>
              <div className={styles.socials}>
                <a href="https://www.behance.net/bellazelus" target="_blank">
                  <img src={Behance} alt="Behance" />
                </a>
                <a href="https://www.linkedin.com/in/isabella-czelusniak-7692a8181/" target="_blank">
                  <img src={Linkedin} alt="Linkedin" />
                </a>
              </div>
              <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FiMenu size={24} />
              </button>
            </div>
          </div>
  
        </div>

        <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
            <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
        >
            <FiMenu size={24} />
        </button>
          <NavLink to="/">
              <img src={Logo} alt="Elipse" className={styles.elipse}/>
          </NavLink>
            {navLinks}
            <div className={styles.mobileSocials}>
              <a href="https://www.behance.net/bellazelus" target="_blank">
                <img src={Behance} alt="Behance" />
              </a>
              <a href="https://www.linkedin.com/in/isabella-czelusniak-7692a8181/" target="_blank">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </nav>
      </header>
    );
  };