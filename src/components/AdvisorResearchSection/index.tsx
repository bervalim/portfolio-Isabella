import mackbook from "../../assets/MacBookAir.png";
import style from "./style.module.scss";

export const AdvisorResearchSection = () => {
  return (
    <>
      <div className="container md mb-[20rem]" id="2.1">
        <div className="relative">
          <div className="">
            <h3 className="title six">
              2.1 What is the user trying to accomplish?
            </h3>
            <p className="paragraph eleven w-[57%]">
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
          </div>
          <img src={mackbook} className={style.floatingImage} width={1200} />
        </div>
        <span className="font-display font-[600] text-[200px] text-[#FAFBFC] absolute right-[-26rem] rotate-270 z-[-1] text-title">
          Research
        </span>
      </div>
    </>
  );
};
