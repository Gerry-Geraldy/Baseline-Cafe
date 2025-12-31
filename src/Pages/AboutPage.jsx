import AboutHero from "../Sections/About/AboutHero";
import BrandJourney from "../Sections/About/BrandJourney";
import LocationSection from "../Sections/About/LocationSection";
import MissionVision from "../Sections/About/MissionVision";

const AboutPage = () => {
  return (
    <main className="px-6 md:px-10">
      <AboutHero />

      {/* ==== FRONT CAFE IMAGE (Inline, tanpa komponen terpisah) ==== */}
      <section className="w-full flex justify-center py-10">
        <div
          className="
            w-full max-w-4xl 
            aspect-square 
            rounded-xl 
            overflow-hidden 
            shadow-lg
          "
        >
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600"
            alt="Cafe Front"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </section>
      <MissionVision />
      <BrandJourney />
      <LocationSection />
    </main>
  );
};

export default AboutPage;
