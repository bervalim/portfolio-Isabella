import { AdvisorSection } from "../../components/AdvisorSection"
import { ClusterSection } from "../../components/ClusterSection"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { IokeeSection } from "../../components/IokeeSection"


export const Projects = () => {
    return(
        <DefaultTemplate>
               
            <AdvisorSection/>
            <ClusterSection/>
            <IokeeSection/>
        </DefaultTemplate>
    )
}