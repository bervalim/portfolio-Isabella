// import { AdvisorResearchSection } from "../../components/AdvisorResearchSection"
import { ClusterSummarySection } from "@/components/ClusterSummarySection";
import { useEffect, useState } from "react";
import ClusterImg from "../../assets/cluster2.png";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import "./style.css";

export const Cluster = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          console.log(visibleSection.target.id);
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.8 } // Define quando a seção deve ser considerada "visível" (50% visível)
    );

    ["1.", "2.1", "3.1", "4.1"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [["1.", "2.1", "3.1", "4.1"]]);

  return (
    <DefaultTemplate>
      <div className="">
        <span className="clusterSpan">CLUSTER</span>
        <br />
        <span className="clusterDate">01.07.22 to 25.10.22</span>
        <div className="imgCluster">
          <img src={ClusterImg} />
        </div>

        <div className="flex">
          <div className="container w-[10%] custom-responsive min-h-[2000px]">
            <div className="spacer h-[200px]"></div>

            <div className="sticky-box text-gray-50 flex flex-col gap-[16px] font-display text-[16px] ">
              <a
                className={`pl-[16px] pr-[4px] pt-[10px] pb-[4px] border-l-[2px] border-indigo-500 h-[44px] text-inherit  ${
                  activeSection === "1."
                    ? "font-[600] !text-gray-200 border-gray-200"
                    : ""
                }`}
                href="#1."
              >
                1. Summary
              </a>

              <a
                className={`pl-[16px] pr-[4px] pt-[10px] pb-[4px] border-l-[2px] border-indigo-500 h-[44px] text-inherit ${
                  activeSection === "2.1"
                    ? "font-[600] !text-gray-200 border-gray-200"
                    : ""
                }`}
                href="#2.1"
              >
                2. Research
              </a>

              <a
                className={`pl-[16px] pr-[4px] pt-[10px] pb-[4px] border-l-[2px] border-indigo-500 h-[44px] text-inherit ${
                  activeSection === "3.1"
                    ? "font-[600] !text-gray-200 border-gray-200"
                    : ""
                }`}
                href="#3.1"
              >
                3. Design
              </a>

              <a
                className={`pl-[16px] pr-[4px] pt-[10px] pb-[4px] border-l-[2px] border-indigo-500 h-[44px] text-inherit ${
                  activeSection === "4.1"
                    ? "font-[600] !text-gray-200 border-gray-200"
                    : ""
                }`}
                href="#4.1"
              >
                4. Results
              </a>
            </div>
          </div>
          <div className="pr-[15rem] pl-[10rem] container relative">
            <ClusterSummarySection />
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};
