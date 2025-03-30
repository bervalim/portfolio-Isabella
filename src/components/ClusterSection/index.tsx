import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import Cluster2 from "../../assets/Cluster4.png"; // foreground
import { useEffect, useState } from "react";
import { useInViewAnimation } from "../../hooks/useInviewAnimation";
import { motion } from "framer-motion";


export const ClusterSection = () => {
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
                    {isMobile && <h2 className="title one">Cluster</h2>}
                        <p className="paragraph two">Chemical sales company Website</p>

                        <div className={style.tags}>
                            <span className="paragraph seven">B2B SaaS</span>
                            <span className="paragraph seven">Front & Back Office</span>
                            <span className="paragraph seven">UI Design</span>
                            <span className="paragraph seven">UX Research</span>
                        </div>
                        <div className={style.divCaseStudyLink}>
                        <Link to="" className={style.caseStudyLink}>
                            <span className="paragraph six">View Case Study</span>
                            <FiArrowUpRight size={19} />
                        </Link>
                        </div>
                       
                    </div>

                    <div className={style.imageWrapper}>
                    {!isMobile && <h2 className="title one">Cluster</h2>}
                        <motion.img src={Cluster2} alt="Cluster background UI" className={style.bgImage} initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.6, ease: "easeOut" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};