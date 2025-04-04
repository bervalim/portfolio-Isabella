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

export const AdvisorCaseStudy = () => {
  return (
    <DefaultTemplate>
      <div className="flex">
        <div className="container w-[10%]">
          <div className="spacer"></div>

          <div className="sticky-box">
            🚀 Eu subo com a tela e fico fixo quando alcanço o topo!
          </div>
        </div>
        <div className="flex flex-col gap-[198px] w-[90%]">
          <AdvisorSummarySection />
          <Summary />
          <UserPrimaryChalleger />
          <SolveProblem />
          <FinalResult />
          <Conclusion />
          {/* <AdvisorResearchSection /> */}
        </div>
      </div>
    </DefaultTemplate>
  );
};
