import Forecast from "../../assets/Forecasting 1.png";
import video from "../../assets/videoAdvisor.mp4";
import "./style.css";
import style from "./style.module.scss";

import { Challenges } from "./challenges";
import { Conclusions } from "./conclusions";
import { Consistent } from "./consistent";
import { FinalResult } from "./finalResult";
import { Needs } from "./needs";
import { Problems } from "./problems";
import { SolveTheProblem } from "./solveTheProblem";
import { TwoPersonas } from "./twoPersonas";
import { What } from "./what";

export const ClusterSummarySection = () => {
  return (
    <div>
      <What />
      <TwoPersonas />
      <Problems />
      <Challenges />
      <SolveTheProblem />
      <Consistent />
      <Needs />
      <FinalResult />
      <Conclusions />
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
