import { Link } from "react-router-dom";
import Advisor3 from "../../assets/advisor.png"
import { FiArrowUpRight } from "react-icons/fi";
import style from "./style.module.scss";
import { useInViewAnimation } from "../../hooks/useInviewAnimation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export const AdvisorSection = () => {
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
                        <div
                            className={style.imageWrapper}
                            >
                           {!isMobile && <h2 className="title one">Advisor</h2>}
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
                        {isMobile && <h2 className="title one">Advisor</h2>}
                        <p className="paragraph two">SaaS Promotion Management Solution.</p>

                        <div className={style.tags}>
                            <span className="paragraph seven">Design System</span>
                            <span className="paragraph seven">Project Management</span>
                            <span className="paragraph seven">Vision Design</span>
                            <span className="paragraph seven">UX Research</span>
                        </div>

                        <Link to="/adivisor-case-study" className={style.caseStudyLink}>
                            <span className="paragraph six">View Case Study</span>
                            <FiArrowUpRight size={19} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
