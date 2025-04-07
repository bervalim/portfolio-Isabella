import lock from "../../../assets/lock.png";
import "./style.css";

interface ICard {
  title: string;
  text: string;
}

function Card({ text, title }: ICard) {
  return (
    <div className="flex flex-col items-start p-6 gap-4 md:h-[172px] bg-[#F7F7F8]  rounded-[8px] p-[24px]  font-primary text-gray-50">
      <div className="font-[700] mb-[6px]">
        <p>{title}</p>
      </div>

      <div className="text-[18px]">
        <p>{text}</p>
      </div>
    </div>
  );
}

export function UserPrimaryChalleger() {
  return (
    <div className="container md font-display" id="2.2">
      <h3 className="title six">
        2.2 What are the user's primary challenges in their daily work?
      </h3>
      <p className="paragraph eleven mt-[16px]">
        After identifying the goals, we then listed problem statements based on
        the user’s journey research and disconevery sessions with consultants
        and stakeholders.
      </p>

      <div
        className="flex gap-[16px] text-gray-25 mb-[48px] mt-[16px] flex-wrap"
      >
        <span className="flex gap-[6px]">
          Vision Problem Statements <img src={lock} className="lock-icon" />
        </span>
        <span className="flex gap-[6px]">
          Merchant User Journey <img src={lock} className="lock-icon" />
        </span>
      </div>

      <div className="challenges-container">
        <Card
          text="Limited creativity and planning freedom due to unclear inputs make it harder to explore new ideas and plan effectively, reducing the impact of promotional activities."
          title="LIMITED CREATIVITY AND EXPLORATION"
        />
        <Card
          title="REAL-TIME PERFORMANCE COMPARISON"
          text="Lack real-time visualization of scenarios and metrics, needing a system to compare scenarios visually, adjust inputs in real-time, and regenerate charts for better decisions."
        />
        <Card
          title="TRANSITION FROM IDEA TO REAL PROMOTION"
          text="Struggle to put their ideas and scenarios into action and need a simple, seamless way to integrate them into the planning process."
        />
      </div>
    </div>
  );
}
