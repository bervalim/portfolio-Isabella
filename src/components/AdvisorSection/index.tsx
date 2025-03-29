import { Link } from "react-router-dom";
import Adivisor1 from "../../assets/Advisor1.png"; // Monitor
import Advisor2 from "../../assets/Advisor2.png"; // BG UI
import { FiArrowUpRight } from "react-icons/fi";
import style from "./style.module.scss";
import { useInViewAnimation } from "../../hooks/useInviewAnimation";
import { motion } from "framer-motion";

export const AdvisorSection = () => {
    const { ref, isInView } = useInViewAnimation();
    return (
        <section className={style.section} ref={ref}>
            <div className="container md">
                <div className={style.flexbox}>
                        <motion.div
                            className={style.imageWrapper}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                            <img src={Advisor2} alt="Advisor UI background" className={style.bgImage} />
                            <motion.img
                                src={Adivisor1}
                                alt="Advisor screen mockup"
                                className={style.foregroundImage}
                                initial={{ opacity: 0, x: 30 }} // entrada vindo da direita
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                whileHover={{ x: -20 }} // desliza para a esquerda no hover
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                />
                        </motion.div>

                    <div className={style.content}>
                        <h2 className="title one">Advisor</h2>
                        <p className="paragraph two">SaaS Promotion Management Solution.</p>

                        <div className={style.tags}>
                            <span className="paragraph seven">Design System</span>
                            <span className="paragraph seven">Project Management</span>
                            <span className="paragraph seven">Vision Design</span>
                            <span className="paragraph seven">UX Research</span>
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
