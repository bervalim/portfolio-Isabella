import style from "./style.module.scss";
import lock from "../../assets/lock.png";
import building from "../../assets/building.png";
import mackbook from "../../assets/MacBookAir.png";

export const AdvisorResearchSection = () => {
  return (
    <>
      <div className="container md">
        <div className="flex justify-between">
          <div className="">
            <h3 className="title six">
              2.1 What is the user trying to accomplish?
            </h3>
            <p className="paragraph eleven">
              Based on personas, product requirements and delivrey alignment we
              defined the user goals related to the new feature.
            </p>

            <div className={style.box}>
              <div className={style.flexItemBox}>
                {/* <img src={building}></img> */}
                <span className="paragraph ten variation">MERCHANT NEEDS</span>
              </div>
              <p className="paragraph two variation">
                Users need a way to create promotions with reliable forecasts
                and ensure they maximize the{" "}
                <span style={{ fontWeight: "bold" }}>
                  full potential of each promotion.
                </span>
              </p>
            </div>

            {/* <h3 className="title six">
          2.2 What are the user's primary challenges in their daily work?
        </h3>
        <div>
          <p className="paragraph eleven">
            After identifying the goals, we then listed problem statements based
            on the user’s journey research and disconevery sessions with
            consultants and stakeholders.
          </p>
          <div>
            <div>
              <span className="paragraph six variation">
                Vision Problem Statements
              </span>
              <img src={lock}></img>
            </div>
            <div>
              <span className="paragraph six variation">
                Merchant User Journey
              </span>
              <img src={lock}></img>
            </div>
          </div>
        </div>
        <div>
          <div className="box">
            <h5 className="paragraph ten anoterVariation">
              Limited Creativity and Exploration{" "}
            </h5>
            <p className="paragraph two anotherVariation">
              Limited creativity and planning freedom due to unclear inputs make
              it harder to explore new ideas and plan effectively, reducing the
              impact of promotional activities.
            </p>
          </div>
          <div className="box">
            <h5 className="paragraph ten anoterVariation">
              Real-time Performance Comparison
            </h5>
            <p className="paragraph two anotherVariation">
              Lack real-time visualization of scenarios and metrics, needing a
              system to compare scenarios visually, adjust inputs in real-time,
              and regenerate charts for better decisions.
            </p>
          </div>
          <div className="box">
            <h5 className="paragraph ten anoterVariation">
              Transition from idea to real promotion
            </h5>
            <p className="paragraph two anotherVariation">
              Struggle to put their ideas and scenarios into action and need a
              simple, seamless way to integrate them into the planning process.
            </p>
          </div>
        </div> */}
          </div>
          <img
            src={mackbook}
            className=""
            // width="800"
            // height="600"
          />
        </div>
      </div>
    </>
  );
};
