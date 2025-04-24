import { motion } from "framer-motion";
import Cluster2 from "../../assets/Cluster4.png"; // foreground
import { useInViewAnimation } from "../../hooks/useInviewAnimation";
import style from "./style.module.scss";

export const ClusterSection = () => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section className={style.section} ref={ref}>
      <div className="container md">
        <div className={style.flexbox}>
          <div className={style.content}>
            <p className="paragraph two">Chemical sales company Website</p>

            <div className={style.tags}>
              <span className="paragraph seven">B2B SaaS</span>
              <span className="paragraph seven">Front & Back Office</span>
              <span className="paragraph seven">UI Design</span>
              <span className="paragraph seven">UX Research</span>
            </div>
            <div className={style.divCaseStudyLink}>
              <span
                className={`${style.comingSoon} paragraph six`}
                style={{ color: "#919BA7" }}
              >
                Coming soon
              </span>
            </div>
          </div>

          <div className={style.imageWrapper}>
            <h2 className={`${style.titleClustes} title one`}>Cluster</h2>
            <motion.img
              src={Cluster2}
              alt="Cluster background UI"
              className={style.bgImage}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
