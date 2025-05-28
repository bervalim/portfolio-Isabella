import build from "../../assets/building.svg";
import cart from "../../assets/shopping-cart.svg";
import "./style.css";

export function Problems() {
  return (
    <div className="container md font-display w-full mt-[127px]">
      <h3 className="title six">
        2.2 What problems block users from achieving their goals?
      </h3>
      <p className="section-text mt-[16px]">
        To answer this question, we researched similar solutions by conducting a
        competitive analysis and defined problem statements for each user type.
      </p>
      <p className="section-text">View Competitive Analysis</p>
      <div className="flex mt-[58px] gap-[24px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex">
            <img src={build} className="mr-[4px]" />
            <div className="flex flex items-center">
              <span className="text-[14px] font-[700] text-[#5F6D7E]">
                Supplier
              </span>
            </div>
          </div>
          <div className="bg-[#F7F7F8] w-[384px] h-[138px] rounded-[8px] flex justify-center">
            <div className="p-[16px] flex justify-center rounded-lg shadow">
              <div className="">
                <p className="text-[16px] font-[700] text-[#5F6D7E]">
                  Lack of insights
                </p>
                <p className="mt-[16px] text-[14px] font-[500] text-[#49556D]">
                  Suppliers can’t easily track shop performance, such as
                  best-sellers or revenue trends.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F8] w-[384px] h-[138px] rounded-[8px] flex justify-center">
            <div className="p-[16px] flex justify-center rounded-lg shadow">
              <div className="">
                <p className="text-[16px] font-[700] text-[#5F6D7E]">
                  Limited storefront customization
                </p>
                <p className="mt-[16px] text-[14px] font-[500] text-[#49556D]">
                  Suppliers lack simple tools to highlight products, promotions,
                  and branding.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F8] w-[384px] h-[138px] rounded-[8px] flex justify-center">
            <div className="p-[16px] flex justify-center rounded-lg shadow">
              <div className="">
                <p className="text-[16px] font-[700] text-[#5F6D7E]">
                  No timely alerts
                </p>
                <p className="mt-[16px] text-[14px] font-[500] text-[#49556D]">
                  Suppliers miss critical updates, like low stock or pending
                  orders, which can hurt sales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex h-[32px]">
            <img src={cart} className="mr-[4px]" />
            <div className="flex flex items-center">
              <span className="text-[14px] font-[700] text-[#5F6D7E]">
                Buyer
              </span>
            </div>
          </div>
          <div className="bg-[#F7F7F8] w-[384px] h-[138px] rounded-[8px] flex justify-center">
            <div className="p-[16px] flex justify-center rounded-lg shadow">
              <div className="">
                <p className="text-[16px] font-[700] text-[#5F6D7E]">
                  Categories are confusing
                </p>
                <p className="mt-[16px] text-[14px] font-[500] text-[#49556D]">
                  Product categories don’t follow industry standards, making it
                  hard for buyers to find what they need.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F8] w-[384px] h-[138px] rounded-[8px] flex justify-center">
            <div className="p-[16px] flex justify-center rounded-lg shadow">
              <div className="">
                <p className="text-[16px] font-[700] text-[#5F6D7E]">
                  Search isn’t relevant
                </p>
                <p className="mt-[16px] text-[14px] font-[500] text-[#49556D]">
                  Buyers struggle to find products because search results are
                  often off-target, and filters don’t match their needs.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F8] w-[384px] h-[138px] rounded-[8px] flex justify-center">
            <div className="p-[16px] flex justify-center rounded-lg shadow">
              <div className="">
                <p className="text-[16px] font-[700] text-[#5F6D7E]">
                  Missing product details
                </p>
                <p className="mt-[16px] text-[14px] font-[500] text-[#49556D]">
                  Buyers need more visuals and technical information, like
                  images, diagrams, and certifications, to make decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex">
            <div className="flex mr-[4px]">
              <img src={build} />
              <img src={cart} />
            </div>

            <div className="flex flex items-center">
              <span className="text-[14px] font-[700] text-[#5F6D7E]">
                Shared Problems
              </span>
            </div>
          </div>
          <div className="bg-[#F7F7F8] w-[384px] h-[138px] rounded-[8px] flex justify-center">
            <div className="p-[16px] flex justify-center rounded-lg shadow">
              <div className="">
                <p className="text-[16px] font-[700] text-[#5F6D7E]">
                  Documentation errors
                </p>
                <p className="mt-[16px] text-[14px] font-[500] text-[#49556D]">
                  Poor handling of buyer documents causes delays, compliance
                  issues, and legal risks.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F8] w-[384px] h-[138px] rounded-[8px] flex justify-center">
            <div className="p-[16px] flex justify-center rounded-lg shadow">
              <div className="">
                <p className="text-[16px] font-[700] text-[#5F6D7E]">
                  Complicated ordering process
                </p>
                <p className="mt-[16px] text-[14px] font-[500] text-[#49556D]">
                  The ordering process has too many steps and unclear actions,
                  causing delays and mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
