import Suitcase from "../../assets/suitcase.png";
import Desktop from "../../assets/desktop.png";
import Pencil from "../../assets/pencil.png";
import FileText from "../../assets/file-text.png";
import Vector from "../../assets/Vector.png";
import Forecast from "../../assets/Forecasting 1.png";
import video from "../../assets/videoAdvisor.mp4";
import style from "./style.module.scss";
import lock from "../../assets/lock.png";

export const Summary = () => {
  return (
    <div className="container md font-display mb-[450px]">
      <h3 className="title six">1. What is PromoAI</h3>
      <div className="flex max-w-[100%] mt-[58px] mb-[58px]">
        <div className="w-[50%] pr-[20px]">
          <p className="text-gray-50 font-[700] text-[14px] mb-[16px]">
            ABOUT THE PRODUCT
          </p>
          <p className="text-gray-100 mb-[16px]">
            A single platform for all promotional management, Promotion Solution
            is broken into three key modules: Promotion Analyzer, Promotion
            Planner, and Promotion Advisor.
          </p>
          <p className="text-gray-100">
            The app aims to{" "}
            <span className="font-[700]">
              assist retailers in better planning, executing, and analyzing
              promotions.
            </span>
          </p>
        </div>
        <div className="w-[50%]">
          <p className="text-gray-50 font-[700] text-[14px] mb-[16px]">
            MODULE GOALS & PURPOSE
          </p>
          <p className="text-gray-100">
            The new module is designed to{" "}
            <span className="font-[700]">optimize promotions</span>, helping
            users achieve their goals related to{" "}
            <span className="font-[700]">
              sales, quantity, revenue, or margin.
            </span>
          </p>
        </div>
      </div>

      <div className="flex min-w-[100%]">
        <div className="grid grid-cols-8 gap-[35px]">
          <div className="bg-[white] pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={Suitcase}></img>
              <span className="paragraph ten">TYPE</span>
            </div>
            <p className="paragraph seven">Contract</p>
          </div>
          <div className="bg-[white] col-span-2 pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={Desktop} />
              <span className="paragraph ten">TOOLS</span>
            </div>
            <p className="paragraph seven">Figma, Confluence, JIRA</p>
          </div>
          <div className="bg-[white] pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={Pencil} />
              <span className="paragraph ten">ROLE</span>
            </div>
            <p className="paragraph seven">UX Designer</p>
          </div>
          <div className="bg-[white] col-span-2 pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={FileText} />
              <span className="paragraph ten">SCOPE</span>
            </div>
            <p className="paragraph seven">New Module on App Platform</p>
          </div>
          <div className="bg-[white] col-span-2 pl-[32px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px]">
            <div className="flex gap-[8px]">
              <img src={Vector} />
              <span className="paragraph ten">TEAM</span>
            </div>
            <p className="paragraph seven">Full Cross-functional Team</p>
          </div>
        </div>
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
