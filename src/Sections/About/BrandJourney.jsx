import { Flag, Rocket, Sparkles } from "lucide-react";
import Title from "../../Components/Title";
import { timelineData } from "../../Constants/indexAbout";



const BrandJourney = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* ==== SECTION TITLE ==== */}
        <Title
          subtitle="Our Journey"
          title="HOW WE STARTED & EVOLVED INTO A PREMIUM BRAND"
          align="center"
          animate={true}
        />

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-9 top-0 bottom-0 w-[2px] bg-neutral-200"></div>

          <div className="space-y-20">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative flex gap-10 group">
                  {/* Icon */}
                  <div className="w-20 flex justify-center">
                    <div className="bg-black text-white p-4 rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm text-neutral-500 font-semibold uppercase tracking-wider">
                      {item.year}
                    </p>
                    <h3 className="text-2xl font-semibold mt-1 text-neutral-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-neutral-700 mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-5 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover scale-100 group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandJourney;
