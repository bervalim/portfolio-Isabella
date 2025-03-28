import style from "./style.module.scss";


export const TestimonialSection = () => {
    return (
        <section className={style.section}>
              <div className="container md">
                    <h2 className="title four">Testimonials</h2>
                    <div className={style.flexbox}>
                        <div>
                            <div className={style.flexcontainer}>
                                <hr/>
                                <p className="paragraph five">“The quality of Bella’s work rivals Senior designers I have worked with in the past. The organization she brought to the design system, documentation, and our ticketing structure was instrumental in how we work with teams. The high level of detail and thoughtfulness in Bella’s designs is exceptional.”</p>
                                <cite className="paragraph four">Director of User Experience</cite>
                               
                            </div> 
                            <div>
                                <hr/>
                                <p className="paragraph five">“...In addition to the new excellent features everything also just looks and feels great. I love that UX is working side-by-side with product - very little tickets are actually being completed with a corresponding design done by excellent designers (team of two).
                                Just wanted to thank you.”</p>
                                <cite className="paragraph four">VP, Product</cite>
                            </div> 
                            <div>
                                <hr/>
                                <p className="paragraph five">“I took Bella as a Junior UX/UI Designer to support in projects with some high profile B2B clients. She made her self worthy of every task we threw her way asking all the right questions and being autonomous. I felt confidence in letting her handle the day to day communications with the clients and she did not disappoint there either. I will most likely hire again in the future and highly recommend her for any UX/UI projects.” </p>
                                <cite className="paragraph four">Digital Product Designer</cite>
                            </div> 
                        </div>
                        <div className={style.containerright}>
                            <div>
                                <hr/>
                                <p  className="paragraph five" id="p1">“Your work demonstrated your ability not only to communicate verbally, but also to deliver collateral that explained our design and vision in a very effective way. 
                                Additionally, you took that even further in successful presentations with delivery, leadership, and clients. Many people has expressed how clearly and simply you explain design concepts, how well you organize and communicate what needs to be done, and how efficiently you respond to queries and issues.”
                                </p>
                                <p  className="paragraph five" id="p2">“You have demonstrated an ability to lead collaboration in a way that fosters an inviting environment for collaborators. You took on the challenge of leading a full project collaboration and design thinking sessions, and used your superpower of organization to really keep things creative while also staying on track with timelines. </p>
                                <p  className="paragraph five" id="p3">Your initiative in discovery sessions really has given us a strong basis to move into the future and also helped develop your relationships with the team. 
                                Finally, your strong teamwork with Product and Marketing teams to deliver on ticketing and on design deliverables for Marketing was excellent--the amount of work you were able to produce with clarity, while having fun with teammates is really inspiring.”</p>
                                <cite className="paragraph four">Senior UX Designer</cite>
                            </div> 
                        </div>
                    </div>
              </div>
        </section>
    )
}