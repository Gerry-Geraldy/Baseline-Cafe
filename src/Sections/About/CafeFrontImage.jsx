const CafeFrontImage = () => {
  return (
    <section className="w-full flex justify-center px-6">
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
          className="w-full mt-5 h-full object-cover rounded-md"
        />
      </div>
    </section>
  );
};

export default CafeFrontImage;
