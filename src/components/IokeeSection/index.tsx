import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Iokee from "../../assets/Iooke4.png";
import { useInViewAnimation } from "../../hooks/useInviewAnimation";
import style from "./style.module.scss";

export const IokeeSection = () => {
  const { ref, isInView } = useInViewAnimation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className={style.section} ref={ref}>
      <div className="container md">
        <div className={style.flexbox}>
          <div className={style.content}>
            {isMobile && (
              <>
                <h2 className={`title one ${style.titleIokee}`}>Iokee</h2>
                <motion.img
                  src={Iokee}
                  alt="Iokee App mockup"
                  className={style.image}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  whileHover={{ scale: 1.02, rotateZ: -1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </>
            )}

            <p className={`paragraph two ${style.description}`}>
              <>Energy equipment {isMobile && ( <br /> )} managment app for AJTEC Company</>
            </p>

            <div className={style.tags}>
              <span className="paragraph seven">
                Eletric Car Supply Manager
              </span>
              <span className="paragraph seven">Insights Organization</span>
              <span className="paragraph seven">Mobile Design</span>
            </div>

            <div className={style.caseStudyWrapper}>
              <span className="paragraph six" style={{ color: "#919BA7" }}>
                Coming soon
              </span>
            </div>
          </div>

          <div className={style.imageWrapper}>
            {!isMobile && <h2 className={`${style.titleText} title one`}>Iokee</h2>}
            {!isMobile && (
              <motion.img
                src={Iokee}
                alt="Iokee App mockup"
                className={style.imagePc}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                whileHover={{ scale: 1.02, rotateZ: -1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
