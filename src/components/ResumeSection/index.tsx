import style from "./style.module.scss";

export const ResumeSection = () => {
    return (
        <section>
            <div className="container md">
                <div className={style.flexbox}>
                    <div>
                        <h2 className="title four">Experience</h2>
                        <hr/>
                        <ul className={style.list}>
                            <li className="paragraph two">4+ years of experience designing user interfaces;</li>
                            <li className="paragraph two">Background in Graphic Design;</li>
                            <li className="paragraph two">Working with B2B SaaS, insurance and promotion management products</li>
                            <li className="paragraph two">Designing for complex systems and for scalable, consistent design systems;</li>
                            <li className="paragraph two">Shaping and driving design strategies that align with business objectives;</li>
                            <li className="paragraph two">Leading usability testing sessions, gathering qualitative and quantitative data, and iterating designs based on feedback;</li>
                            <li className="paragraph two">Mentoring junior designers and driving overall design quality</li>
                            <li className="paragraph two">Working within agile environments, participating in sprints, and adapting to quick iterative cycles;</li>
                            <li className="paragraph two">Managing projects from research and ideation to delivery, testing, and iteration;</li>
                            <li className="paragraph two">Leading stakeholder workshops, managing client expectations, building alignment across teams and negotiating design decisions;</li>
                            <li className="paragraph two">Driving UX maturity within organizations by implementing best practices, optimizing processes, and leading the adoption of new methodologies.</li>
                        </ul>
                    </div>
                    <div>
                    <h2 className="title four" >Skills</h2>
                    <hr/>
                        <ul className={style.list}>
                            <li className="paragraph two">Strong collaboration, communication, and management skills.</li>
                            <li className="paragraph two">Capable of addressing intricate design challenges with creative solutions.</li>
                            <li className="paragraph two">killed in creating forward-thinking designs that align with the organization’s vision and connect design strategies to business goals.</li>
                            <li className="paragraph two">Proficient in communicating design concepts and leading discussions on design choices with stakeholders.</li>
                            <li className="paragraph two">Experienced in guiding junior designers and leading design processes at a strategic level.</li>
                            <li className="paragraph two">Expert in producing data-driven, high-quality designs efficiently and iterating based on user feedback.</li>
                            <li className="paragraph two">Adept at translating complex, conceptual ideas into compelling customer experiences.</li>
                            <li className="paragraph two">Initiative in developing comprehensive systems that accommodate diverse user interactions across channels.</li>
                            <li className="paragraph two">Proficient at identifying opportunities in user experience and business solutions.</li>
                            <li className="paragraph two">Apt at ensuring logical and intuitive navigation flows.</li>
                            <li className="paragraph two">Experienced in conducting and leading user research efforts, gathering valuable insights into user needs and behaviors.</li>
                            <li className="paragraph two">Strong analytical and problem-solving skills.</li>
                            <li className="paragraph two">Effective at managing multiple simultaneous projects and supporting product teams.</li>
                            <li className="paragraph two">Experienced in developing documentation and processes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}