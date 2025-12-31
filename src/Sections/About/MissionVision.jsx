import { missionVisionData } from "../../Constants/indexAbout";

const MissionVision = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 xl:px-32 py-20">
      <div className="max-w-6xl mx-auto space-y-20">
        {missionVisionData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
          >
            {/* Left label */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-[#4A2C2A] uppercase">
                {item.label}
              </h3>
            </div>

            {/* Right content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3a1f1d] leading-snug">
                {item.title.split("|").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
