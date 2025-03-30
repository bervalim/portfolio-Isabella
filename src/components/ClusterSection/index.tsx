import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import Cluster2 from "../../assets/Cluster4.png"; // foreground
import { useEffect, useState } from "react";


export const ClusterSection = () => {
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
                        <img src={Cluster2} alt="Cluster background UI" className={style.bgImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};