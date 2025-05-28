import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import "./style.css";

import img4 from "../../assets/Frame4809767(1).png";
import img5 from "../../assets/Frame48097672(2).png";
import img3 from "../../assets/Frame48097672.png";
import img1 from "../../assets/Group16.png";
import img6 from "../../assets/Group17.png";
import img2 from "../../assets/image115.png";
import img7 from "../../assets/image116.png";

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

export function SolveTheProblem() {
  const [tab, setTab] = useState({ img: img1, item: "item-1" });
  return (
    <div className="container md font-display w-full mt-[127px]" id="3.1">
      <h3 className="title six">3.1 How did we solve the problem?</h3>
      <p className="section-text mt-[16px]">
        We then mapped all the low-fidelity screens and defined the required
        functionalities for each page. After approving the workflow and layout,
        we refined and updated the designs to high fidelity.
      </p>

      <div className="accordion-container-flex">
        <div className="accordion-container">
          <Accordion
            type="single"
            collapsible
            className="bg-[#F7F7F8] p-[16px] rounded-[8px] mb-[16px]"
            value={tab.item}
          >
            <AccordionDiv
              title="Dashboard Insights"
              text="Track shop performance, such as best-sellers and revenue trends."
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
              title="Storefront customization"
              text="Highlight products, promotions, and branding."
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
              title="Categorization"
              text="Industry-standard categories, making it easy for buyers to find what they need."
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
              title="Search & filtering tool"
              text="Search results are relevant, and filters match user needs."
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
              title="Product details"
              text="Visuals and technical information, like images, diagrams, and certifications, help users make decisions."
              item="item-5"
              onClick={() =>
                setTab({
                  item: "item-5",
                  img: img5,
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
              title="Documentation review"
              text="Proper document handling avoids delays, compliance issues, and legal risks."
              item="item-6"
              onClick={() =>
                setTab({
                  item: "item-6",
                  img: img6,
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
              title="Ordering process"
              text="The ordering process has too many steps, but clear actions help guide the user through the workflow."
              item="item-7"
              onClick={() =>
                setTab({
                  item: "item-7",
                  img: img7,
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
