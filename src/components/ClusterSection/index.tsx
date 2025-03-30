import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import Cluster2 from "../../assets/Cluster.png"; // foreground


export const ClusterSection = () => {
    return (
        <section className={style.section}>
            <div className="container md">
                <div className={style.flexbox}>
                    <div className={style.content}>
                        <h2 className="title one">Cluster</h2>
                        <p className="paragraph two">Chemical sales company Website</p>

                        <div className={style.tags}>
                            <span className="paragraph seven">B2B SaaS</span>
                            <span className="paragraph seven">Front & Back Office</span>
                            <span className="paragraph seven">UI Design</span>
                            <span className="paragraph seven">UX Research</span>
                        </div>

                        <Link to="" className={style.caseStudyLink}>
                            <span className="paragraph six">View Case Study</span>
                            <FiArrowUpRight size={19} />
                        </Link>
                    </div>

                    <div className={style.imageWrapper}>
                        <img src={Cluster2} alt="Cluster background UI" className={style.bgImage} />
                        {/* <img src={Cluster1} alt="Cluster screen mockup" className={style.foregroundImage} /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};