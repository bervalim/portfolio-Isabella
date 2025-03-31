import { FaSuitcase } from "react-icons/fa";
import Desktop from "../../assets/desktop.png";
import Pencil from "../../assets/pencil.png";
import FileText from "../../assets/file-text.png";
import Vector from "../../assets/Vector.png";
import Forecast from "../../assets/Forecasting 1.png"
import video from "../../assets/videoAdvisor.mp4";
import style from "./style.module.scss";

export const AdvisorSummarySection = () => {
    return (
        <section className={style.section}>
            <div className="container">
                <div className={style.flexbox}>
                    <div className={style.videoWrapper} > 
                        <img src={Forecast} className={style.monitorImage}></img>
                        <video className={style.advisorVideo}  src={video} autoPlay
                                loop
                                muted
                                playsInline>  
                        </video>
                    </div>
                    <div className={style.texts}>
                        <span style={{ display: "none" }}>dd</span>
                        <h2 className="title five">Advisor</h2>
                        <p>06.21 to 07.22</p>
                    </div>
                </div>
                </div>
            <div className="container md">
                <h3>1. What is PromoAI</h3>
                <div>
                    <div>
                        <h4>ABout the Product</h4>
                        <p>A single platform for all promotional management, Promotion Solution is broken into three key modules: Promotion Analyzer, Promotion Planner, and Promotion Advisor. 
                       </p>
                        <p>The app aims to assist retailers in better planning, executing, and analyzing promotions.</p>
                    </div>
                    <div>
                        <h4>Module Goals & PURPOSE</h4>
                        <p>The new module is designed to optimize promotions, helping users achieve their goals related to sales, quantity, revenue, or margin.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <span><FaSuitcase size={20} color="#5F6D7E" /> TYPE</span>
                        <p>Contract</p>
                    </div>
                    <div>
                        <span><img src={Desktop}/>TOOLS</span>
                        <p>Figma, Confluence, JIRA</p>
                    </div>
                    <div>
                        <span><img src={Pencil}/>ROLE</span>
                        <p>UX Designer</p>
                    </div>
                    <div>
                        <span><img src={FileText}/>SCOPE</span>
                        <p>New Module on App Platform</p>
                    </div>
                    <div>
                        <span><img src={Vector}/>TEAM</span>
                        <p>Full Cross-functional Team</p>
                    </div>
                </div>
            </div>

        </section>
    )
}