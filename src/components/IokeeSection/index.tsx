import style from "./style.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Iokee from "../../assets/Iooke4.png";
import { useState, useEffect } from "react";

export const IokeeSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
          useEffect(() => {
                  const handleResize = () => {
                      setIsMobile(window.innerWidth < 960);
                  };
          
                  window.addEventListener("resize", handleResize);
                  return () => window.removeEventListener("resize", handleResize);
              }, []);
  return (
    <section className={style.section}>
      <div className="container md">
        <div className={style.flexbox}>
      <div className={style.content}>
        {isMobile && (
          <>
            <img src={Iokee} alt="Iokee App mockup" />
            <h2 className="title one">Iokee</h2>
          </>
        )}

        <p className="paragraph two">
          Energy equipment managment app for AJTEC Company
        </p>

        <div className={style.tags}>
          <span className="paragraph seven">Eletric Car Supply Manager</span>
          <span className="paragraph seven">Insights Organization</span>
          <span className="paragraph seven">Mobile Design</span>
        </div>

        <div className={style.caseStudyWrapper}>
          <Link to="" className={style.caseStudyLink}>
            <span className="paragraph six">View Case Study</span>
            <FiArrowUpRight size={19} />
          </Link>
        </div>
      </div>

      <div className={style.imageWrapper}>
        {!isMobile && <h2 className="title one">Iokee</h2>}
        {!isMobile && <img src={Iokee} alt="Iokee App mockup" />}
      </div>
        </div>
      </div>
    </section>
  );
};