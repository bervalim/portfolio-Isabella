import Suitcase from "../../assets/suitcase.png";
import Desktop from "../../assets/desktop.png";
import Pencil from "../../assets/pencil.png";
import FileText from "../../assets/file-text.png";
import Vector from "../../assets/Vector.png";
import Forecast from "../../assets/Forecasting 1.png";
import video from "../../assets/videoAdvisor.mp4";
import style from "./style.module.scss";

export const AdvisorSummarySection = () => {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.flexbox}>
          <div className={style.videoWrapper}>
            <img src={Forecast} className={style.monitorImage}></img>
            <video
              className={style.advisorVideo}
              src={video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className={style.texts}>
            <h2 className="title five">Advisor</h2>
            <p className="paragraph eigth">06.21 to 07.22</p>
          </div>
        </div>
      </div>
      <div className="container md">
        <h3 className="title six">1. What is PromoAI</h3>
        <div className={style.flexContainer}>
          <div>
            <h4 className="title seven">ABOUT THE PRODUCT</h4>
            <p className="paragraph nine">
              A single platform for all promotional management,{" "}
              <a
                href="https://cognira.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#49556D", textDecoration: "underline" }}
              >
                Promotion Solution
              </a>{" "}
              is broken into three key modules: Promotion Analyzer, Promotion
              Planner, and Promotion Advisor.
            </p>
            <p className={`${"paragraph nine"} ${style.secondParagraph}`}>
              The app aims to{" "}
              <span style={{ fontWeight: "bold" }}>
                assist retailers in better planning, executing, and analyzing
                promotions.
              </span>
            </p>
          </div>
          <div>
            <h4 className="title seven"> MODULE GOALS & PURPOSE</h4>
            <p className="paragraph nine">
              The new module is designed to{" "}
              <span style={{ fontWeight: "bold" }}>optimize promotions</span>,
              helping users achieve their goals related to{" "}
              <span style={{ fontWeight: "bold" }}>
                sales, quantity, revenue, or margin.
              </span>
            </p>
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.box}>
            <div className={style.flexItem}>
              <span className="paragraph ten">TYPE</span>
              <img src={Suitcase}></img>
            </div>
            <p className="paragraph seven">Contract</p>
          </div>
          <div className={style.box}>
            <div className={style.flexItem}>
              <span className="paragraph ten">TOOLS</span>
              <img src={Desktop} />
            </div>
            <p className="paragraph seven">Figma, Confluence, JIRA</p>
          </div>
          <div className={style.box}>
            <div className={style.flexItem}>
              <span className="paragraph ten">ROLE</span>
              <img src={Pencil} />
            </div>
            <p className="paragraph seven">UX Designer</p>
          </div>
          <div className={style.box}>
            <div className={style.flexItem}>
              <span className="paragraph ten">SCOPE</span>
              <img src={FileText} />
            </div>
            <p className="paragraph seven">New Module on App Platform</p>
          </div>
          <div className={style.box}>
            <div className={style.flexItem}>
              <span className="paragraph ten">TEAM</span>
              <img src={Vector} />
            </div>
            <p className="paragraph seven">Full Cross-functional Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};
