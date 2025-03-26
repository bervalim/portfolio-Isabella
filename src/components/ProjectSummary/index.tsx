import style from "./style.module.scss";

export const ProjectSummary = () => {
    return (
      <section className={style.section}>
        <div className="container md">
          <h2 className="title four">Work & Freelance Projects</h2>
          <hr />
          <div className={style.flexbox}>
            <div className={style.list}>
              <h4 className="paragraph menus"><span style={{ color: "#252D3C" }}>Cognira</span> | Product Application Solution | UI/UX Designer</h4>
              <div>
                <ul>
                  <li className="paragraph three">Lead multiple projects and collaborated with cross-functional teams.</li>
                  <li className="paragraph three">Initiated research processes and vision projects in colaboration with stakeholders.</li>
                  <li className="paragraph three">Bult the initial version of the  design system components and documentation on figma.</li>
                </ul>
              </div>
  
              <h4  className="paragraph menus"><span style={{ color: "#252D3C" }}>Cluster</span> | Chemical Supplier Website | Freelance UI/UX Designer</h4>
              <div>
                <ul>
                  <li className="paragraph three">Created internal back-office and external client-facing applications, focusing on user-friendly navigation and smooth interaction flows.</li>
                  <li className="paragraph three">Delivered detailed prototypes and mapped user journeys to meet project objectives.</li>
                </ul>
              </div>
  
              <h4  className="paragraph menus"><span style={{ color: "#252D3C" }}>Online Telecom</span> | Mobile Application | Freelance UI/UX Designer</h4>
              <div>
                <ul>
                  <li className="paragraph three">Conducted UX research, usability testing, and iterative design for a mobile app redesign, improving user flows and engagement.</li>
                  <li className="paragraph three">Benchmarked competitors to inform design strategy, aligning with business goals.</li>
                </ul>
              </div>
            </div>
  
            <div className={style.list}>
                <h4  className="paragraph menus"><span style={{ color: "#252D3C" }}>SRS Distribution</span> | Internal Company Web Application | Freelance UI Designer</h4>
                <div>
                    <ul>
                        <li className="paragraph three">Designed user interfaces, conducted requirements gathering, and created low- to high-fidelity prototypes in Figma.</li>
                        <li className="paragraph three">Updated legacy applications, maintaining design system consistency while meeting complex user needs.</li>
                    </ul>
                </div>
                <h4  className="paragraph menus"><span  style={{ color: "#252D3C" }}>Iokee</span> | Energetic Usage Application | Freelance UI/UX Designer </h4>
                <div>
                    <ul>
                        <li className="paragraph three">Performed iterative design improvements for a mobile application revamp.</li>
                        <li className="paragraph three">Defined user workflows, enhancing navigation and user engagement.</li>
                    </ul>
                </div>
                <h4  className="paragraph menus"><span style={{ color: "#252D3C" }}>Smart Cert </span>| Insurance Application Form | Freelance UI Designer </h4>
                <div>
                    <ul>
                        <li className="paragraph three">Organized and structured workflows to optimize user interaction and project efficiency.</li>
                        <li className="paragraph three">Designed user interfaces with a focus on usability and intuitive navigation, aligning with gathered requirements.</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  