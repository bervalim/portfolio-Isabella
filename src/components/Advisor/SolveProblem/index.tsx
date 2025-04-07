import lock from "../../../assets/lock.png";
import img1 from "../../../assets/tela-1.png";
import img2 from "../../../assets/tela-2.png";
import img3 from "../../../assets/tela-3.png";
import img4 from "../../../assets/tela-4.png";
import img5 from "../../../assets/tela-5.png";
import "./style.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface ICard {
  title: string;
  text: string;
  item: string;
  onClick: () => void;
}

function AccordionDiv({ text, title, item, onClick }: ICard) {
  return (
    <AccordionItem value={item} onClick={() => onClick()}>
      <AccordionTrigger className="text-gray-50 text-[16px] font-[700]">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-gray-100 bg-[#F7F7F8] font-[500]">
        {text}
      </AccordionContent>
    </AccordionItem>
  );
}

export function SolveProblem() {
  const [tab, setTab] = useState({ img: img1, item: "item-1" });

  return (
    <div className="container md font-display" id="3.1">
      <h3 className="title six">3.1 How did we solve the problems?</h3>
      <p className="paragraph eleven  mt-[16px]">
        We collected all the research, requirements, and findings, then turned
        them into low-fidelity wireframes, which we validated with the Product
        team before refining them into high-fidelity wireframes and a prototype.
      </p>
      <p className="paragraph eleven  mt-[16px]">
        We also spotted an opportunity to create our own Design System during
        the project and began developing it simultaneously.
      </p>

      <div className="flex gap-[16px] text-gray-25 mb-[48px] mt-[16px]">
        <span className="flex gap-[6px]">
          Vision Problem Statements <img src={lock} className="lock-icon" />
        </span>
        <span className="flex gap-[6px]">
          Merchant User Journey <img src={lock} className="lock-icon" />
        </span>
      </div>

      <div className="accordion-container-div justify-between gap-[20px]">
        <div className="w-[20%] accordion-container">
          <Accordion
            type="single"
            collapsible
            className="bg-[#F7F7F8] p-[16px] rounded-[8px] mb-[16px]"
            value={tab.item}
          >
            <AccordionDiv
              title="Add Scenarios"
              text="Inline editing for easy adjustments and quick updates during the adding or editing process."
              item="item-1"
              onClick={() =>
                setTab({
                  item: "item-1",
                  img: img1,
                })
              }
            />
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="bg-[#F7F7F8] p-[16px] rounded-[8px] mb-[16px]"
            value={tab.item}
          >
            <AccordionDiv
              title="Clone Scenarios"
              text="The ability to clone promotions for easily creating similar products or promotion ranges."
              item="item-2"
              onClick={() =>
                setTab({
                  item: "item-2",
                  img: img2,
                })
              }
            />
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="bg-[#F7F7F8] p-[16px] rounded-[8px] mb-[16px]"
            value={tab.item}
          >
            <AccordionDiv
              title="View Performance"
              text="View and compare all relevant metrics in one centralized location."
              item="item-3"
              onClick={() =>
                setTab({
                  item: "item-3",
                  img: img3,
                })
              }
            />
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="bg-[#F7F7F8] p-[16px] rounded-[8px] mb-[16px]"
            value={tab.item}
          >
            <AccordionDiv
              title="Change Chart Metrics"
              text="Ability to change chart metrics for easy visual comparison."
              item="item-4"
              onClick={() =>
                setTab({
                  item: "item-4",
                  img: img4,
                })
              }
            />
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="bg-[#F7F7F8] p-[16px] rounded-[8px] mb-[16px]"
            value={tab.item}
          >
            <AccordionDiv
              title="Activate Scenario"
              text="Activate ideas directly from the what-if exercise with easy integration into the planning process."
              item="item-5"
              onClick={() =>
                setTab({
                  item: "item-5",
                  img: img5,
                })
              }
            />
          </Accordion>
        </div>

        <div className="img-container">
          <img src={tab.img} height={699} className="responsive-img" />
        </div>
      </div>
    </div>
  );
}
