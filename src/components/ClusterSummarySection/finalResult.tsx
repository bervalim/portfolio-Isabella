import vid1 from "../../assets/Screen Recording 2025-01-10 at 00.26.25.mp4";

export function FinalResult() {
  return (
    <div className="container md font-display w-full mt-[127px]">
      <h3 className="title six">4.2 What is the final result?</h3>
      <p className="section-text mt-[16px]">
        Finally, we delivered the prototypes, Figma wireframes, components, and
        the research report to the client.
      </p>

      <div className="bg-[#F7F7F8] rounded-[8px] p-[16px]">
        <div className="flex mb-[16px]">
          <button>ads</button>
          <button>ads</button>
        </div>

        <video
          className="max-w-[100%] rounded-[16px]"
          src={vid1}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
