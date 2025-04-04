import lock from "../../../assets/lock.png";
import "./index.css";

interface ICard {
  title: string;
  text: string[];
}

function Card({ text, title }: ICard) {
  return (
    <div className="flex flex-col items-start !p-[32px] gap-4  h-[172px] bg-[#F7F7F8]  rounded-[8px] p-[24px]  font-primary text-gray-50">
      <div className="font-[700] mb-[6px]">
        <p>{title.toUpperCase()}</p>
      </div>

      <div className="text-[18px] p-6 ml-[30px]">
        <ul className="list-outside">
          {text.map((item) => (
            <li className="mb-[15px]">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Conclusion() {
  return (
    <div className="container md font-display mb-[450px]">
      <h3 className="title six">
        4.2 What were the learnings, conclusions and considerations?
      </h3>
      <p className="paragraph eleven mt-[16px]">
        This projects was my first project at the company, and my first time
        working with cross-functional teams.
      </p>

      <div className="flex gap-[16px] text-gray-25 mb-[48px] mt-[16px]">
        <span className="flex gap-[6px]">
          Design System Initiative <img src={lock} />
        </span>
        <span className="flex gap-[6px]">
          Research Structure <img src={lock} />
        </span>
        <span className="flex gap-[6px]">
          Vision Initiative <img src={lock} />
        </span>
        <span className="flex gap-[6px]">
          Ticketing & Tracking Processes <img src={lock} />
        </span>
      </div>

      <div className="grid grid-flow-col grid-rows-1 gap-[24px]">
        <Card
          text={[
            "The project went well, and the development process ran smoothly.",
            "The project also had a significant impact on the process, as the company had not yet developed and implemented a well-defined UX process.",
          ]}
          title="conclusions"
        />
        <Card
          title="considerations"
          text={[
            "This project opened opportunities for me to initiate the design system, product vision structure, and research processes.",
            "The final product was tested and iterated with new designs that aligned with the module’s vision.",
          ]}
        />
      </div>
    </div>
  );
}
