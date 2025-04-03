// import { AdvisorResearchSection } from "../../components/AdvisorResearchSection"
import { UserPrimaryChalleger } from "../../components/Advisor/UserPrimaryChallenger";
import { AdvisorResearchSection } from "../../components/AdvisorResearchSection";
import { AdvisorSummarySection } from "../../components/AdvisorSummarySection";
import { DefaultTemplate } from "../../components/DefaultTemplate";

export const AdvisorCaseStudy = () => {
  return (
    <DefaultTemplate>
      <AdvisorSummarySection />
      <UserPrimaryChalleger />
      {/* <AdvisorResearchSection /> */}
    </DefaultTemplate>
  );
};
