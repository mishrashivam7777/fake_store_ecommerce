import videosrc from '../../assets/video.mp4'
const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src={videosrc} 
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Discover Amazing Deals on the Latest Products!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore a wide range of categories and find exactly what you're looking for. Shop now and enjoy exclusive discounts!
        </p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#e64a19] transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
