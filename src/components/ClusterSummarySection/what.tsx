import Desktop from "../../assets/desktop.png";
import FileText from "../../assets/file-text.png";
import Pencil from "../../assets/pencil.png";
import Suitcase from "../../assets/suitcase.png";
import Vector from "../../assets/Vector.png";
import "./style.css";

export function What() {
  return (
    <div
      className="container relative md font-display w-full mt-[127px] flex"
      id="1."
    >
      <div className="w-full">
        <h3 className="title six mb-[58px]">1. What is CLUSTER?</h3>

        <div className="w-[564px]">
          <p className="text-[14px] text-[#5F6D7E]"><b>ABOUT THE PRODUCT</b></p>
          <p className="text-[24px] mb-[48px] text-[#49556D]">
            Cluster is a <b>B2B e-commerce</b> marketplace that{" "}
            <b>connects chemical suppliers with chemical buyers</b> across
            emerging markets.
          </p>
          <p className="text-[14px] text-[#5F6D7E]"><b>VALUE & SOLUTION</b></p>
          <p className="text-[24px] text-[#49556D]">
            Enable quick supplier discovery, streamlined communication, and
            automated logistics and administrative workflows, ensuring{" "}
            <b>faster and more efficient order processing.</b>
          </p>
        </div>
      </div>
      <div className="flex relative w-[40%]">
        <div className="flex flex-col gap-[24px]">
          <div className="w-[100%] h-[84px] bg-[white] !pl-[16px] pr-[32px] pb-[16px] rounded-[8px] card">
            <div className="flex gap-[8px] mb-[8px]">
              <img src={Suitcase}></img>
              <span className="paragraph ten">TYPE</span>
            </div>
            <p className="text-[14px]">Freelance</p>
          </div>
          <div className="w-[100%] bg-[white] pr-[32px] !pl-[16px] pt-[16px] pb-[16px] rounded-[8px] card">
            <div className="flex gap-[8px] mb-[8px]">
              <img src={FileText} />
              <span className="paragraph ten">SCOPE</span>
            </div>
            <p className="text-[14px]">Front & Back Office App</p>
          </div>
          <div className="w-[100%] h-[84px] bg-[white] !pl-[16px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px] card">
            <div className="flex gap-[8px] mb-[8px]">
              <img src={Pencil} />
              <span className="paragraph ten">ROLE</span>
            </div>
            <p className="text-[14px]">UX Researcher, UI Designer</p>
          </div>
          <div className="w-[100%] h-[84px] bg-[white] !pl-[16px]  pr-[32px] pt-[16px] pb-[16px] rounded-[8px] card">
            <div className="flex gap-[8px] mb-[8px]">
              <img src={Desktop} />
              <span className="paragraph ten">TOOLS</span>
            </div>
            <p className="text-[14px]">Figma, Milanote, Notion</p>
          </div>
          <div className="w-[100%] h-[84px] bg-[white] !pl-[16px] pr-[32px] pt-[16px] pb-[16px] rounded-[8px] card">
            <div className="flex gap-[8px] mb-[8px]">
              <img src={Vector} />
              <span className="paragraph ten">TEAM</span>
            </div>
            <p className="text-[14px]">2 UX/UI Designers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
