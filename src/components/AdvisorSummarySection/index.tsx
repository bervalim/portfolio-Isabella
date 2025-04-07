import Desktop from "../../assets/desktop.png";
import FileText from "../../assets/file-text.png";
import Forecast from "../../assets/Forecasting 1.png";
import Pencil from "../../assets/pencil.png";
import Suitcase from "../../assets/suitcase.png";
import Vector from "../../assets/Vector.png";
import video from "../../assets/videoAdvisor.mp4";
import style from "./style.module.scss";
import "./style.css";

export const Summary = () => {
  return (
    <div className="container md font-display w-full" id="1.">
      <h3 className="title six">1. What is PromoAI</h3>
      <div className="about-module-section">
        <div className="about-column">
          <p className="section-label">ABOUT THE PRODUCT</p>
          <p className="section-text">
            A single platform for all promotional management, Promotion Solution
            is broken into three key modules: Promotion Analyzer, Promotion
            Planner, and Promotion Advisor.
          </p>
          <p className="section-text">
            The app aims to{" "}
            <span className="bold">
              assist retailers in better planning, executing, and analyzing
              promotions.
            </span>
          </p>
        </div>
        <div className="about-column">
          <p className="section-label">MODULE GOALS & PURPOSE</p>
          <p className="section-text">
            The new module is designed to{" "}
            <span className="bold">optimize promotions</span>, helping users
            achieve their goals related to{" "}
            <span className="bold">sales, quantity, revenue, or margin.</span>
          </p>
        </div>
      </div>

      <div className="flex w-[100%] relative">
        <div className="flex gap-[16.75px] min-w-[100%] flex-wrap">
          <div className="min-w-[12.84%] bg-[white] pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={Suitcase}></img>
              <span className="paragraph ten">TYPE</span>
            </div>
            <p className="paragraph seven">Contract</p>
          </div>
          <div className="min-w-[20.93%] bg-[white] pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={Desktop} />
              <span className="paragraph ten">TOOLS</span>
            </div>
            <p className="paragraph seven">Figma, Confluence, JIRA</p>
          </div>
          <div className="min-w-[13.67%] bg-[white] pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={Pencil} />
              <span className="paragraph ten">ROLE</span>
            </div>
            <p className="paragraph seven">UX Designer</p>
          </div>
          <div className="min-w-[23.91%] bg-[white] pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={FileText} />
              <span className="paragraph ten">SCOPE</span>
            </div>
            <p className="paragraph seven">New Module on App Platform</p>
          </div>
          <div className="min-w-[22.46%] bg-[white] pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={Vector} />
              <span className="paragraph ten">TEAM</span>
            </div>
            <p className="paragraph seven">Full Cross-functional Team</p>
          </div>
        </div>
        <span className="font-[600] text-[150px] text-[#FAFBFC] absolute right-[0] bottom-[1rem] z-[-1] text-title">
          Summary
        </span>
      </div>
    </div>
  );
};

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
    </section>
  );
};
