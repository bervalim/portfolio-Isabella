import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Advisor3 from "../../assets/advisor.png";
import { useInViewAnimation } from "../../hooks/useInviewAnimation";
import style from "./style.module.scss";

export const AdvisorSection = () => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section className={style.section} ref={ref}>
      <div className="container md">
        <div className={style.flexbox}>
          <div className={style.imageWrapper}>
            <div className={style.titleText}>
              <h2 className="title one">Advisor</h2>
            </div>
            <motion.img
              src={Advisor3}
              alt="Advisor UI background"
              className={style.bgImage}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              whileHover={{ x: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <div className={style.content}>
            <div className={`${style.subTitle}`}>
              <p className={` paragraph two`}>
                SaaS Promotion Management Solution.
              </p>
            </div>

            <div className={style.tags}>
              <span className="paragraph seven">Design System</span>
              <span className="paragraph seven">Project Management</span>
              <span className="paragraph seven">Vision Design</span>
              <span className="paragraph seven">UX Research</span>
            </div>

            <div className={`${style.caseStudyLinkDiv}`}>
              <Link to="/adivisor-case-study" className={style.caseStudyLink}>
                <span className="paragraph six">View Case Study</span>
                <FiArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
