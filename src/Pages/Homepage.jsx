import FeaturedSections from "../Sections/Homepage/FeaturedSections";
import GalleryHome from "../Sections/Homepage/GalleryHome";
import Hero from "../Sections/Homepage/Hero";
import MenuThumbnail from "../Sections/Homepage/MenuThumbnail";
import ProductHighlights from "../Sections/Homepage/ProductHighlights";
import Testimony from "../Sections/Homepage/Testimony";

const Homepage = () => {
  return (
    <main className="w-full">
      <Hero />
      <div className="p-10">
        <ProductHighlights />
        <GalleryHome />
        <MenuThumbnail />
        <FeaturedSections />
        <Testimony />
      </div>
    </main>
  );
};

export default Homepage;
