import style from "./style.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Iokee from "../../assets/Iokee.png";

export const IokeeSection = () => {
  return (
    <section className={style.section}>
      <div className="container md">
        <div className={style.flexbox}>
        <div className={style.imageWrapper}>
            <img src={Iokee} alt="Iokee App mockup" />
          </div>
          <div className={style.content}>
            <h2 className="title one">Iokee</h2>
            <p className="paragraph two">
              Energy equipment managment app for AJTEC Company
            </p>

            <div className={style.tags}>
              <span className="paragraph seven">Eletric Car Supply Manager</span>
              <span className="paragraph seven">Insights Organization</span>
              <span className="paragraph seven">Mobile Design</span>
            </div>

            <Link to="" className={style.caseStudyLink}>
              <span className="paragraph six">View Case Study</span>
              <FiArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};