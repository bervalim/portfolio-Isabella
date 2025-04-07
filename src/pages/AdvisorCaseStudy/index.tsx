// import { AdvisorResearchSection } from "../../components/AdvisorResearchSection"
import { SolveProblem } from "@/components/Advisor/SolveProblem";
import { UserPrimaryChalleger } from "../../components/Advisor/UserPrimaryChallenger";
import { AdvisorResearchSection } from "../../components/AdvisorResearchSection";
import {
  AdvisorSummarySection,
  Summary,
} from "../../components/AdvisorSummarySection";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { FinalResult } from "@/components/Advisor/FinalResult";
import { Conclusion } from "@/components/Advisor/Conclusion";
import { useEffect, useState } from "react";

export const AdvisorCaseStudy = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.8 } // Define quando a seção deve ser considerada "visível" (50% visível)
    );

    ["1.", "2.2", "3.1", "4.1"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [["1.", "2.2", "3.1", "4.1"]]);

  return (
    <DefaultTemplate>
      <div className="">
        <AdvisorSummarySection />
        <div className="flex">
          <div className="container w-[12%] custom-responsive">
            <div className="spacer"></div>

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
                  activeSection === "2.2"
                    ? "font-[600] !text-gray-200 border-gray-200"
                    : ""
                }`}
                href="#2.2"
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
          <div className="flex flex-col gap-[198px] w-[90%]">
            <Summary />
            <UserPrimaryChalleger />
            <SolveProblem />
            <FinalResult />
            <Conclusion />
            {/* <AdvisorResearchSection /> */}
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};
