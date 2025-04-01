import { AdvisorResearchSection } from "../../components/AdvisorResearchSection"
import { AdvisorSummarySection } from "../../components/AdvisorSummarySection"
import { DefaultTemplate } from "../../components/DefaultTemplate"

export const AdvisorCaseStudy = () => {
    return(
        <DefaultTemplate>
            <AdvisorSummarySection/>
            <AdvisorResearchSection/>
        </DefaultTemplate>
    )
}